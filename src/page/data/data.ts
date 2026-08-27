import img from "./image.jpg";

export const image = img;

type Tfrases = {
  palavra: string;
  dica: string;
  imagem?: string;
  tema?: string;
};

type Tdata = {
  titulo: string;
  frases: Tfrases[];
  imghome: string,
};

export const data: Tdata[] = [
  {
    titulo: "Tempo Geológico da Terra",
    imghome: img,
    frases: [
  {
    "palavra": "Terra",
    "dica": "Planeta onde vivemos, formado há cerca de 4,6 bilhões de anos.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Período geológico",
    "dica": "Intervalo de tempo usado para estudar a história da Terra.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Éon",
    "dica": "Grande divisão da história da Terra.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Fóssil",
    "dica": "Resto ou registro de um ser vivo preservado em uma rocha.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Dinossauro",
    "dica": "Réptil que viveu na Terra há milhões de anos.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Jurássico",
    "dica": "Período geológico em que muitos dinossauros viveram.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Meteorito",
    "dica": "Fragmento de rocha espacial que chega à superfície da Terra.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Continente",
    "dica": "Grande porção de terra emersa.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Pangeia",
    "dica": "Grande massa de terra que reunia vários continentes no passado.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Oceano",
    "dica": "Grande massa de água salgada que cobre parte da superfície terrestre.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Placa tectônica",
    "dica": "Grande bloco rochoso que forma parte da superfície terrestre.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Atmosfera",
    "dica": "Camada de gases que envolve a Terra.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Oxigênio",
    "dica": "Gás presente na atmosfera e importante para muitos seres vivos.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Água",
    "dica": "Substância encontrada em grande quantidade na superfície da Terra.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Geleira",
    "dica": "Grande massa de gelo formada ao longo do tempo.",
    "tema": "História da Terra"
  },
  {
    "palavra": "Mudança climática",
    "dica": "Alteração das condições climáticas da Terra ao longo do tempo.",
    "tema": "História da Terra"
  }
]
}

  
];