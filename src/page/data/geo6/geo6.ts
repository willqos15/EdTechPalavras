const imagens = import.meta.glob(
  './img/*.png',
  {
    eager: true,
    import: 'default'
  }
) as Record<string, string>;

function getImagem(nome: string) {
  return imagens[`./img/${nome}`];
}



type Tfrases = {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}



export const geo6:Tfrases[] = [
    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "ROTAÇÃO",
        dica: "Movimento que a Terra realiza em torno de seu próprio eixo, com duração aproximada de 24 horas.",
        imagem: getImagem("image001.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "TRANSLAÇÃO",
        dica: "Movimento que a Terra faz ao redor do Sol, levando cerca de 365 dias e 6 horas para completar uma volta.",
        imagem: getImagem("image002.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "EIXO DE INCLINAÇÃO",
        dica: "Linha imaginária que atravessa a Terra de um polo ao outro e influencia as estações do ano.",
        imagem: getImagem("image003.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "PÊNDULO DE FOUCAULT",
        dica: "Experimento famoso que demonstrou fisicamente que a Terra está em rotação.",
        imagem: getImagem("image004.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "NUTAÇÃO",
        dica: "Pequena oscilação periódica realizada pelo eixo de rotação terrestre.",
        imagem: getImagem("image005.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "HEMISFÉRIO NORTE",
        dica: "Metade da Terra localizada acima da Linha do Equador.",
        imagem: getImagem("image006.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "MERIDIANO DE GREENWICH",
        dica: "Linha imaginária principal que divide a Terra em Leste e Oeste.",
        imagem: getImagem("image007.png")
    },

    {
        tema: "Movimentos da Terra e Eixo",
        palavra: "ÓRBITA",
        dica: "Trajetória curva percorrida por um corpo celeste ao redor de outro.",
        imagem: getImagem("image008.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "SOLSTÍCIO",
        dica: "Momento do ano em que um hemisfério recebe a maior ou a menor quantidade de luz solar, marcando o início do verão ou do inverno.",
        imagem: getImagem("image009.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "EQUINÓCIO",
        dica: "Momento em que os dois hemisférios recebem a mesma quantidade de luz solar, marcando o início da primavera ou do outono.",
        imagem: getImagem("image010.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "VERÃO",
        dica: "Estação do ano com dias mais longos, noites mais curtas e temperaturas geralmente mais elevadas.",
        imagem: getImagem("image011.png")
        
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "INVERNO",
        dica: "Estação em que os dias costumam ser mais curtos e as temperaturas mais baixas."
        ,
        imagem: getImagem("image012.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "OUTONO",
        dica: "Estação de transição marcada pela redução gradual das temperaturas e pela queda de folhas em muitas regiões.",
        imagem: getImagem("image013.png")
        
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "PRIMAVERA",
        dica: "Estação conhecida pelo florescimento das plantas e pelo aumento gradual das temperaturas.",
        imagem: getImagem("image014.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "AFÉLIO",
        dica: "Ponto da órbita terrestre em que a Terra está mais distante do Sol.",
        imagem: getImagem("image015.png")
    },

    {
        tema: "Estações do Ano, Solstícios e Equinócios",
        palavra: "PERIÉLIO",
        dica: "Ponto da órbita terrestre em que a Terra está mais próxima do Sol.",
        imagem: getImagem("image016.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "LUA",
        dica: "Único satélite natural da Terra.",
        imagem: getImagem("image017.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "LUA NOVA",
        dica: "Fase em que a parte iluminada da Lua está voltada para o Sol e não pode ser observada da Terra.",
        imagem: getImagem("image018.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "LUA CHEIA",
        dica: "Fase em que a Lua aparece totalmente iluminada no céu noturno.",
        imagem: getImagem("image019.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "MARÉ ALTA",
        dica: "Momento em que o nível do mar atinge sua maior altura devido à atração gravitacional da Lua e do Sol.",
        imagem: getImagem("image020.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "MARÉ BAIXA",
        dica: "Momento em que o nível do mar atinge sua menor altura durante o ciclo das marés.",
        imagem: getImagem("image021.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "ECLIPSE SOLAR",
        dica: "Fenômeno que ocorre quando a Lua se posiciona entre a Terra e o Sol, bloqueando sua luz."
        ,
        imagem: getImagem("image022.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "ECLIPSE LUNAR",
        dica: "Fenômeno que acontece quando a sombra da Terra é projetada sobre a Lua.",
        imagem: getImagem("image023.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "GRAVIDADE",
        dica: "Força de atração responsável por manter corpos e astros em suas trajetórias.",
        imagem: getImagem("image024.png")
    },

    {
        tema: "A Lua, Eclipses e Marés",
        palavra: "CRATERAS",
        dica: "Grandes marcas na superfície da Lua formadas pelo impacto de meteoritos.",
        imagem: getImagem("image025.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "HELIOCENTRISMO",
        dica: "Modelo astronômico que coloca o Sol no centro do Sistema Solar.",
        imagem: getImagem("image026.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "GEOCENTRISMO",
        dica: "Teoria antiga que afirmava que a Terra era o centro e os demais astros giravam ao seu redor."
        ,
        imagem: getImagem("image027.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "SOL",
        dica: "Estrela central do Sistema Solar que fornece luz e calor para a Terra.",
        imagem: getImagem("image028.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "MERCÚRIO",
        dica: "Menor planeta do Sistema Solar e o mais próximo do Sol.",
        imagem: getImagem("image029.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "VÊNUS",
        dica: "Planeta mais quente do Sistema Solar, conhecido como Estrela D'Alva.",
        imagem: getImagem("image030.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "MARTE",
        dica: "Planeta conhecido como Planeta Vermelho devido à presença de óxido de ferro em sua superfície.",
        imagem: getImagem("image031.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "JÚPITER",
        dica: "Maior planeta do Sistema Solar, famoso pela Grande Mancha Vermelha.",
        imagem: getImagem("image032.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "SATURNO",
        dica: "Gigante gasoso reconhecido por seu extenso sistema de anéis.",
        imagem: getImagem("image033.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "URANO",
        dica: "Planeta de cor azul-esverdeada que gira inclinado quase de lado.",
        imagem: getImagem("image034.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "NETUNO",
        dica: "Planeta mais distante do Sol, conhecido pelos ventos extremamente velozes.",
        imagem: getImagem("image035.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "PLUTÃO",
        dica: "Corpo celeste atualmente classificado como planeta anão.",
        imagem: getImagem("image036.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "VIA LÁCTEA",
        dica: "Galáxia onde estão localizados o Sistema Solar e a Terra.",
        imagem: getImagem("image037.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "ANO-LUZ",
        dica: "Unidade usada para medir grandes distâncias no espaço com base no percurso da luz em um ano.",
        imagem: getImagem("image038.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "ASTEROIDE",
        dica: "Corpo rochoso que orbita o Sol, encontrado principalmente entre Marte e Júpiter.",
        imagem: getImagem("image039.png")
    },

    {
        tema: "Sistema Solar, Modelos e Planetas",
        palavra: "COMETA",
        dica: "Corpo formado por gelo, poeira e rochas que desenvolve uma cauda brilhante ao se aproximar do Sol.",
        imagem: getImagem("image040.png")
    }


]