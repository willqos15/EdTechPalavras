let audioContext: AudioContext | null = null;

let filaDeSons: (() => Promise<void>)[] = [];

let reproduzindo = false;

let soundEnabled = true;

let oscillatorAtual: OscillatorNode | null = null;


// Liga/desliga o som
export function setSoundEnabled(value: boolean) {

  soundEnabled = value;

  if (!value) {

    // Limpa sons que ainda estavam esperando
    filaDeSons = [];

    // Cancela a fala
    speechSynthesis.cancel();

    // Para o bip que está tocando agora
    if (oscillatorAtual) {
      oscillatorAtual.stop();
      oscillatorAtual = null;
    }
  }
}


export default function falar(frase: string) {
   if (!soundEnabled) {
    return Promise.resolve();
  }

  const utterance = new SpeechSynthesisUtterance(frase);

  utterance.lang = "pt-BR";
  utterance.rate = 2;
  utterance.pitch = 2;

  speechSynthesis.speak(utterance);
}

// ACERTO
export function somAcerto(): Promise<void> {

  if (!soundEnabled) {
    return Promise.resolve();
  }

  return adicionarNaFila(async () => {

    await tocarBipeComFrequencia(500, 100);

    await tocarBipeComFrequencia(800, 200);

    await tocarBipeComFrequencia(600, 300);

  });
}


// ERRO
export function somErro(): Promise<void> {

  if (!soundEnabled) {
    return Promise.resolve();
  }

  return adicionarNaFila(async () => {

    await tocarBipeComFrequencia(800, 100);

    await tocarBipeComFrequencia(700, 200);

    await tocarBipeComFrequencia(650, 300);

  });
}


// Adiciona na fila
function adicionarNaFila(
  som: () => Promise<void>
): Promise<void> {

  return new Promise((resolve) => {

    filaDeSons.push(async () => {

      await som();

      resolve();

    });

    processarFila();
  });
}


// Processa a fila
async function processarFila() {

  if (reproduzindo) return;

  reproduzindo = true;

  while (filaDeSons.length > 0) {

    const proximoSom = filaDeSons.shift();

    if (proximoSom) {
      await proximoSom();
    }
  }

  reproduzindo = false;
}


// Toca o bip
export function tocarBipeComFrequencia(
  frequencia: number,
  duracao: number
): Promise<void> {

  return new Promise(async (resolve) => {

    // Se o som foi desligado enquanto estava na fila
    if (!soundEnabled) {
      resolve();
      return;
    }

    if (!audioContext) {
      audioContext = new AudioContext();
    }

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    // Pode ter sido desligado enquanto o AudioContext estava
    // sendo reativado
    if (!soundEnabled) {
      resolve();
      return;
    }

    const oscillator = audioContext.createOscillator();

    const gain = audioContext.createGain();

    oscillatorAtual = oscillator;

    oscillator.type = "sine";

    oscillator.frequency.value = frequencia;

    gain.gain.setValueAtTime(
      0.2,
      audioContext.currentTime
    );

    oscillator.connect(gain);

    gain.connect(audioContext.destination);

    oscillator.onended = () => {

      if (oscillatorAtual === oscillator) {
        oscillatorAtual = null;
      }

      resolve();
    };

    oscillator.start();

    oscillator.stop(
      audioContext.currentTime + duracao / 1000
    );
  });
}