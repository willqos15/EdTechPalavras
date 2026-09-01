import img from "./image.png";

export const image = img;

export const client = "Prof. Jurandir Queiroz"

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
    titulo: "01 Sociologia: Indivíduo e sociedade",
    imghome: img,
    frases: [
    {
      "palavra": "Átomo",
      "dica": "Termo relacionado à origem da palavra indivíduo e à ideia de algo indivisível.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Demócrito",
      "dica": "Filósofo grego que defendia que o universo era formado por átomos e vácuo.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Fenômeno social",
      "dica": "Comportamento ou acontecimento que apresenta uma dimensão coletiva.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Identidade",
      "dica": "Conjunto de categorias sociais às quais os indivíduos sentem que pertencem.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Papéis sociais",
      "dica": "Comportamentos e expectativas associados às posições que uma pessoa ocupa na sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Subjetividade",
      "dica": "Forma singular como cada indivíduo interpreta suas experiências e expectativas sociais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Michel Foucault",
      "dica": "Filósofo e historiador que analisou a formação social e cultural do sujeito.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Sujeito",
      "dica": "Para Foucault, é produzido por processos culturais, sociais, discursivos e institucionais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Sociedade",
      "dica": "Organização de pessoas, instituições, normas e relações que estruturam a vida coletiva.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Cultura",
      "dica": "Conjunto de conhecimentos, valores, hábitos, costumes, crenças, língua e artes de uma sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Poder",
      "dica": "Dimensão da sociedade relacionada às formas de organização e controle das relações sociais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Economia",
      "dica": "Dimensão social relacionada à produção, distribuição e organização dos recursos.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Capitalismo",
      "dica": "Modo de produção baseado na propriedade privada e nas relações de mercado e trabalho.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Estratificação social",
      "dica": "Divisão da sociedade em diferentes posições sociais que podem gerar privilégios e desigualdades.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Classe social",
      "dica": "Posição ocupada pelos indivíduos nas relações econômicas e sociais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Karl Marx",
      "dica": "Filósofo e economista que analisou a sociedade a partir das relações de classe e das condições econômicas.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Luta de classes",
      "dica": "Conflito entre classes sociais com interesses econômicos diferentes.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Classe trabalhadora",
      "dica": "Classe formada por pessoas que vendem sua força de trabalho para obter sua renda.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Meios de produção",
      "dica": "Recursos e instrumentos utilizados para produzir bens e serviços.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Ideologia",
      "dica": "Conjunto de ideias que pode contribuir para legitimar os interesses da classe dominante.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Alienação",
      "dica": "Condição em que o trabalhador se encontra afastado do controle sobre seu trabalho e seus resultados.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Émile Durkheim",
      "dica": "Sociólogo que considerava a sociedade anterior ao indivíduo e estudava os fatos sociais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Consciência coletiva",
      "dica": "Conjunto de crenças e normas compartilhadas que exerce influência sobre os indivíduos.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Fato social",
      "dica": "Forma de agir, pensar e sentir externa ao indivíduo e capaz de exercer influência sobre ele.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Max Weber",
      "dica": "Sociólogo que destacou a importância das ideias, valores e ações dos indivíduos na formação da sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Ação social",
      "dica": "Ação realizada pelo indivíduo levando em consideração outras pessoas ou elementos culturais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Socialização",
      "dica": "Processo pelo qual os indivíduos aprendem normas, valores e formas de convivência social.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Sigmund Freud",
      "dica": "Psicanalista que analisou a relação entre normas culturais, psique e comportamento humano.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Superego",
      "dica": "Instância psíquica associada à internalização das normas e valores culturais.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Ego",
      "dica": "Instância psíquica que busca equilibrar as exigências do superego e a satisfação dos desejos.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Instituições sociais",
      "dica": "Estruturas organizadas que estabelecem normas e formas de funcionamento da sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Mudança social",
      "dica": "Transformação das normas, valores, instituições e formas de organização de uma sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    },
    {
      "palavra": "Revolução",
      "dica": "Mudança profunda que pode abalar e reconstruir as estruturas de uma sociedade.",
      "tema": "Sociologia: Indivíduo e sociedade"
    }
  ]
  },

  {
    titulo: "02 Sociologia: Cultura, etnocentrismo e ideologia",
    imghome: img,
    frases: [
  {
    "palavra": "Evolucionismo cultural",
    "dica": "Teoria que classificava as sociedades em diferentes estágios de evolução.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Selvageria",
    "dica": "Primeiro estágio evolutivo, associado à caça, coleta, fogo e arco e flecha.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Barbárie",
    "dica": "Estágio associado à agricultura, domesticação de animais, cerâmica e metais.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Civilização",
    "dica": "Estágio considerado mais desenvolvido pelos evolucionistas, marcado pela escrita.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Método comparativo",
    "dica": "Método que comparava sociedades e atribuía diferentes graus de evolução a elas.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Neocolonialismo",
    "dica": "Expansão do domínio europeu sobre outros povos, especialmente no século XIX.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Racialismo",
    "dica": "Teoria que afirmava que a humanidade estaria dividida em raças com diferentes características e capacidades.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Raça",
    "dica": "Categoria que foi usada para classificar seres humanos, mas não corresponde a divisões biológicas da espécie humana.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Eugenia",
    "dica": "Ideia de melhorar a humanidade por meio da seleção e controle da reprodução.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Francis Galton",
    "dica": "Cientista britânico considerado criador da eugenia.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Relativismo cultural",
    "dica": "Perspectiva que busca compreender cada sociedade de acordo com sua própria história, valores e cultura.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Pseudociência",
    "dica": "Conhecimento apresentado como científico, mas que não possui fundamentos científicos adequados.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Diversidade cultural",
    "dica": "Existência de diferentes costumes, valores, crenças e formas de vida entre os povos.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Etnocentrismo",
    "dica": "Tendência de julgar outras culturas usando os valores da própria cultura como referência.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Descolonização do pensamento",
    "dica": "Processo de questionar a ideia de que os saberes europeus são universais e absolutos.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Ideologia",
    "dica": "Conjunto de ideias que pode influenciar a maneira como as pessoas compreendem a sociedade e suas relações.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Karl Marx",
    "dica": "Filósofo e economista que estudou a ideologia e as relações de dominação no capitalismo.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Friedrich Engels",
    "dica": "Filósofo e pensador que escreveu A ideologia alemã em parceria com Karl Marx.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Falsa consciência",
    "dica": "Conceito associado a Marx para explicar uma compreensão ilusória da realidade social.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Burguesia",
    "dica": "Classe dominante no capitalismo, proprietária dos meios de produção.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Proletariado",
    "dica": "Classe trabalhadora que vende sua força de trabalho para sobreviver.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Dominação",
    "dica": "Relação em que um grupo exerce poder sobre outro.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Meritocracia",
    "dica": "Ideia de que o sucesso depende principalmente do esforço individual.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Preconceito",
    "dica": "Julgamento antecipado que pode produzir discriminação contra determinados grupos.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  },
  {
    "palavra": "Cultura",
    "dica": "Conjunto de valores, costumes, conhecimentos e formas de interpretar o mundo de uma sociedade.",
    "tema": "Sociologia: Cultura, etnocentrismo"
  }
]
  },

  {
    titulo: "03 Sociologia: Imaginação sociológica",
    imghome: img,
    frases: [
    
  {
    "palavra": "Estranhamento",
    "dica": "Ato de observar algo familiar como se fosse a primeira vez.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Desnaturalização",
    "dica": "Compreensão de que os fenômenos sociais são construções humanas e podem mudar.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Problema social",
    "dica": "Situação que afeta parte da sociedade e pode ser analisada pelas Ciências Sociais.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Déficit educacional",
    "dica": "Falta ou insuficiência de acesso ou qualidade na educação.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Déficit habitacional",
    "dica": "Falta de moradias adequadas para atender às necessidades da população.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Pobreza",
    "dica": "Condição marcada pela falta de recursos necessários para uma vida digna.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Insegurança alimentar",
    "dica": "Dificuldade de acesso regular a alimentos suficientes e adequados.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Água potável",
    "dica": "Água própria e segura para o consumo humano.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Mudanças climáticas",
    "dica": "Alterações duradouras nos padrões do clima da Terra.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Desemprego",
    "dica": "Situação de quem está sem trabalho e procura uma oportunidade de emprego.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Saúde pública",
    "dica": "Conjunto de ações e serviços destinados a proteger e promover a saúde da população.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Poluição",
    "dica": "Introdução de elementos prejudiciais no ambiente, afetando seres vivos e ecossistemas.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Cultura",
    "dica": "Conjunto de práticas, valores, conhecimentos e significados compartilhados por um grupo.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Sociedade",
    "dica": "Conjunto de pessoas que vivem em relações organizadas e compartilham estruturas sociais.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Contexto social",
    "dica": "Conjunto de condições e circunstâncias sociais que influenciam um fenômeno.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Classe social",
    "dica": "Grupo definido por condições econômicas e sociais semelhantes.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Função social",
    "dica": "Papel ou finalidade que uma prática ou instituição desempenha na sociedade.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Transformação social",
    "dica": "Mudança nas estruturas, relações e formas de organização de uma sociedade.",
    "tema": "Imaginação Sociológica"
  },
  {
    "palavra": "Construção social",
    "dica": "Fenômeno criado e transformado pelas relações e práticas humanas ao longo do tempo.",
    "tema": "Imaginação Sociológica"
  }
    ],
  },


  {titulo: "04 Sociologia: Cultura e Natureza",
    imghome: img,
    frases: [
  {
    "palavra": "Cultura",
    "dica": "Conjunto de práticas, valores, conhecimentos e formas de viver produzidos por uma sociedade.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Natureza",
    "dica": "Na visão ocidental, conjunto de elementos que existem independentemente da ação humana.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Teoria ator-rede",
    "dica": "Teoria que entende o social como resultado das interações entre diferentes atores humanos e não humanos.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Cosmologia",
    "dica": "Modelo de pensamento ou visão de mundo sobre a origem e a ordem do universo.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Dicotomia",
    "dica": "Forma de pensamento que divide fenômenos em dois termos opostos.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Crise epistêmica",
    "dica": "Questionamento das formas estabelecidas de produzir e validar o conhecimento.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Cosmologias ameríndias",
    "dica": "Visões de mundo dos povos originários das Américas sobre as relações entre humanos e não humanos.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Multinaturalismo",
    "dica": "Conceito de Eduardo Viveiros de Castro que descreve a ideia ameríndia de uma cultura comum e diversas naturezas.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Multiculturalismo",
    "dica": "Concepção ocidental baseada na ideia de uma natureza única e várias culturas.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Perspectivismo",
    "dica": "Ideia de que diferentes seres percebem o mundo a partir de suas próprias perspectivas.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Direitos da natureza",
    "dica": "Reconhecimento jurídico de que a natureza pode possuir direitos e proteção legal.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Seres sencientes",
    "dica": "Seres capazes de sentir dor, emoções e sofrimento.",
    "tema": "Sociologia: Cultura e Natureza"
  },
  {
    "palavra": "Sujeito de direitos",
    "dica": "Ser ou entidade reconhecida juridicamente como titular de direitos.",
    "tema": "Sociologia: Cultura e Natureza"
  }
]
  }
  ,

  {titulo: '09 Sociologia: Democracia e Direitos Humanos',
    imghome: image,
    frases: [

  {
    "palavra": "Atenas",
    "dica": "Cidade-Estado grega onde surgiu, no século VI a.C., a forma antiga de participação política.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Assembleia",
    "dica": "Espaço público onde os cidadãos atenienses participavam diretamente das decisões.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Revolução Francesa",
    "dica": "Movimento iniciado em 1789 que contribuiu para o fim do absolutismo na França.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Absolutismo",
    "dica": "Sistema político caracterizado pela concentração do poder nas mãos do monarca.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Soberania",
    "dica": "Princípio segundo o qual a autoridade política pertence essencialmente à nação.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Nobreza",
    "dica": "Grupo social que possuía privilégios de nascimento durante o período anterior às transformações revolucionárias.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Democracia liberal",
    "dica": "Modelo que combina representação política, Constituição e proteção das liberdades individuais.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Constituição",
    "dica": "Conjunto de normas que limita os poderes dos representantes e direitos e garantias.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Liberdade de expressão",
    "dica": "Direito de manifestar opiniões e ideias livremente.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Voto censitário",
    "dica": "Sistema em que o direito de votar dependia da posse de propriedades ou de determinado nível de renda.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Voto universal",
    "dica": "Forma de participação eleitoral que amplia o direito de votar para a população sem exigir riqueza ou propriedade.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Karl Marx",
    "dica": "Pensador que relacionou as desigualdades econômicas às limitações da participação política.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Classe dominante",
    "dica": "Grupo que concentra poder econômico e pode influenciar as decisões políticas.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Classe trabalhadora",
    "dica": "Grupo social cuja participação política poderia ser limitada pelas desigualdades econômicas.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Processo eleitoral",
    "dica": "Conjunto de procedimentos relacionados à escolha de representantes por meio das eleições.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Pluralismo",
    "dica": "Presença de diferentes candidatos, partidos, ideias e posições políticas.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Coerção",
    "dica": "Uso de pressão ou força para obrigar alguém a agir contra sua vontade.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Transparência",
    "dica": "Princípio relacionado à clareza e à divulgação das ações dos representantes públicos.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Liberdades civis",
    "dica": "Direitos relacionados à proteção da liberdade individual e da igualdade perante a lei.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Cultura política",
    "dica": "Conjunto de valores e atitudes da sociedade em relação ao poder e às instituições.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Homem cordial",
    "dica": "Conceito de Sérgio Buarque de Holanda relacionado ao personalismo nas relações sociais brasileiras.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Personalismo",
    "dica": "Tendência de tratar relações públicas segundo interesses e vínculos pessoais.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Nepotismo",
    "dica": "Prática de favorecer parentes por meio do uso de cargos ou recursos públicos.",
    "tema": "Democracia e direitos humanos"
  },

 
  {
    "palavra": "Direitos sociais",
    "dica": "Direitos relacionados ao trabalho, educação, saúde, moradia, lazer e serviços públicos.",
    "tema": "Democracia e direitos humanos"
  },
  
  {
    "palavra": "Cidadania global",
    "dica": "Perspectiva  e direitos e responsabilidades aos problemas que ultrapassam fronteiras nacionais.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Cooperação",
    "dica": "Ação conjunta entre pessoas, governos e organizações para enfrentar problemas comuns.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Solidariedade",
    "dica": "Atitude de apoio e colaboração diante de necessidades e problemas de outras pessoas ou grupos.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Diversidade",
    "dica": "Existência de diferentes culturas, características, formas de vida e maneiras de pensar.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Nazismo",
    "dica": "Ideologia e regime alemão associado à perseguição e ao extermínio de grupos considerados inferiores.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Fascismo",
    "dica": "Ideologia e movimento político autoritário associado à Itália de Benito Mussolini.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "ONU",
    "dica": "Organização internacional que aprovou a Declaração Universal dos Direitos Humanos em 1948.",
    "tema": "Democracia e direitos humanos"
  },
  {
    "palavra": "Discriminação",
    "dica": "Tratamento desigual ou injusto baseado em características como origem, crença ou condição social.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Ética",
    "dica": "Reflexão sobre os princípios e valores que orientam as ações humanas.",
    "tema": "Democracia e direitos humanos"
  },

  {
    "palavra": "Virtude",
    "dica": "Qualidade moral desenvolvida por meio de ações equilibradas.",
    "tema": "Democracia e direitos humanos"
  },


    ]


  },

  {
  titulo: "14 Sociologia: Direitos trabalhistas",
  imghome: img,
  frases: [
    {
      "palavra": "Capitalismo",
      "dica": "Sistema econômico baseado na propriedade privada e na busca por lucro.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Durkheim",
      "dica": "Sociólogo que estudou a divisão social do trabalho e a solidariedade.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Solidariedade",
      "dica": "Laço que conecta os indivíduos e contribui para a união social.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Divisão social",
      "dica": "Organização do trabalho em diferentes tarefas realizadas por pessoas.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Mecânica",
      "dica": "Tipo de solidariedade baseado na semelhança entre os indivíduos.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Orgânica",
      "dica": "Tipo de solidariedade baseado na dependência entre diferentes funções.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Karl Marx",
      "dica": "Pensador que analisou as classes sociais e a exploração do trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Burguesia",
      "dica": "Classe social que possui os meios de produção no capitalismo.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Proletariado",
      "dica": "Classe formada por trabalhadores que vendem sua força de trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Salário",
      "dica": "Pagamento recebido pelo trabalhador em troca de seu trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Mais-valia",
      "dica": "Valor apropriado pelo capitalista a partir do trabalho realizado.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Alienação",
      "dica": "Distanciamento do trabalhador em relação ao produto de seu trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Max Weber",
      "dica": "Sociólogo que relacionou valores religiosos ao desenvolvimento do capitalismo.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Vocação",
      "dica": "Ideia de que o trabalho pode ser entendido como uma missão.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Taylorismo",
      "dica": "Modelo que busca aumentar a eficiência por meio do controle do trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Fordismo",
      "dica": "Modelo baseado na produção em massa e na linha de montagem.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Toyotismo",
      "dica": "Modelo baseado na produção conforme a demanda e na redução de estoques.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Automação",
      "dica": "Uso de máquinas e tecnologias para realizar tarefas antes feitas por pessoas.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Terceirização",
      "dica": "Contratação de outra empresa para realizar parte dos serviços.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Desemprego",
      "dica": "Situação de quem está sem trabalho e busca uma ocupação.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Precarização",
      "dica": "Deterioração das condições e dos direitos do trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Sindicato",
      "dica": "Organização que representa e defende interesses dos trabalhadores.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Direitos",
      "dica": "Garantias conquistadas para proteger os trabalhadores.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Trabalho formal",
      "dica": "Trabalho realizado com vínculo e direitos garantidos por lei.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Carteira assinada",
      "dica": "Forma de registrar oficialmente o vínculo de trabalho.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "CLT",
      "dica": "Conjunto de leis que regulamenta as relações de trabalho no Brasil.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Trabalho doméstico",
      "dica": "Atividade realizada para cuidar da casa e atender às necessidades domésticas.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "FGTS",
      "dica": "Fundo destinado ao trabalhador e formado por depósitos feitos pelo empregador.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Trabalho informal",
      "dica": "Atividade remunerada realizada sem vínculo empregatício formal.",
      "tema": "Direitos trabalhistas"
    },
    {
      "palavra": "Autônomo",
      "dica": "Trabalhador que exerce sua atividade sem vínculo empregatício.",
      "tema": "Direitos trabalhistas"
    }
  ],

 

}, 

{
 titulo: "01 Filosofia: As vozes da Filosofia",
    imghome: img,
    frases: [
  {
    "palavra": "Filosofia",
    "dica": "Forma de pensamento baseada em explicações racionais, argumentos, debates e reflexões sobre o mundo.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "pré-socráticos",
    "dica": "Pensadores gregos associados à ruptura com explicações tradicionais e à introdução de explicações racionais sobre o mundo.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Explicação racional",
    "dica": "Explicação que pode ser analisada, debatida, refutada ou comprovada por meio de argumentos.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Argumento",
    "dica": "Conjunto de ideias utilizado para construir e sustentar uma explicação racional.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Discurso",
    "dica": "Forma de organizar e apresentar ideias dentro da reflexão filosófica.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Diálogo",
    "dica": "Prática de troca e discussão de ideias fundamental para o desenvolvimento da filosofia.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Filosofia helenística",
    "dica": "Conjunto de correntes filosóficas desenvolvido entre os séculos IV a.C. e III d.C. em diferentes regiões influenciadas pela cultura grega.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Cultura helenística",
    "dica": "Cultura formada pela combinação de tradições gregas com costumes e conhecimentos de outros povos conquistados pelos macedônicos.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Escolas Helenísticas",
    "dica": "Correntes filosóficas desenvolvidas em diferentes regiões do mundo helenístico entre os séculos IV a.C. e III d.C.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Etnocentrismo",
    "dica": "Perspectiva que interpreta outras culturas a partir dos valores e referências de uma determinada sociedade, podendo levar à exclusão de outras tradições.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Tese orientalista",
    "dica": "Perspectiva que considera que o desenvolvimento da filosofia grega envolveu trocas culturais e influências de outros povos antigos.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Polifonia",
    "dica": "Ideia de que a filosofia é formada por múltiplas vozes e diferentes tradições de pensamento.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Racionalismo",
    "dica": "Tendência de valorização da razão como elemento central para compreender e explicar o mundo.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Irracionalismo",
    "dica": "Perspectiva apresentada no texto como oposição ao racionalismo e associada, de forma crítica, a determinadas interpretações do pensamento oriental.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Monoteísmo",
    "dica": "Crença em um único deus, presente no judaísmo e posteriormente no cristianismo, influenciando diferentes reflexões filosóficas.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Judaísmo",
    "dica": "Tradição religiosa monoteísta cujos valores influenciaram reflexões de filósofos das escolas helenísticas.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Cristianismo",
    "dica": "Religião monoteísta que influenciou a recuperação e a reinterpretação de tradições filosóficas greco-romanas.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Neoplatonismo",
    "dica": "Corrente filosófica relacionada ao platonismo que foi posteriormente reinterpretada a partir de princípios cristãos.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Heródoto",
    "dica": "Historiador grego citado como representante antigo da tese orientalista.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Platão",
    "dica": "Filósofo grego citado entre os pensadores antigos associados às teses orientalistas.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Aristóteles",
    "dica": "Filósofo grego citado entre os pensadores antigos que consideraram aspectos relacionados às influências de outros povos.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Diógenes de Laércio",
    "dica": "Historiador da filosofia que atribuiu o nascimento da filosofia a uma dinâmica social própria do mundo grego.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Ciência especulativa",
    "dica": "Forma de investigação e reflexão apresentada no texto como elemento que algumas interpretações consideraram ausente no pensamento oriental.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Preservação filosófica",
    "dica": "Processo de tradução, registro e transmissão de obras filosóficas antigas para outras épocas e regiões.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Filósofos árabes",
    "dica": "Pensadores que preservaram, traduziram e interpretaram obras greco-romanas, influenciando debates filosóficos posteriores na Europa.",
    "tema": "As vozes da Filosofia"
  },
  {
    "palavra": "Legado grego",
    "dica": "Conjunto de conhecimentos, práticas e tradições gregas disseminado por diferentes regiões durante o período helenístico.",
    "tema": "As vozes da Filosofia"
  }
]
    },

    {titulo:"02 Filosofia: Pré-socráticos e Sócrates",
      imghome: image,
      frases: [
  {
    "palavra": "Cosmos",
    "dica": "Universo entendido como uma realidade organizada e harmoniosa.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Cosmogonia",
    "dica": "Explicação sobre a origem e formação do Universo.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Razão",
    "dica": "Forma de buscar explicações para a realidade sem depender apenas dos mitos.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Mito",
    "dica": "Narrativa tradicional que explica a origem do mundo e dos fenômenos por meio de divindades.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Arkhé",
    "dica": "Princípio ou elemento primordial considerado a origem de todas as coisas.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Tales de Mileto",
    "dica": "Filósofo que considerava a água como o princípio de todas as coisas.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Anaximandro",
    "dica": "Filósofo que defendia o ápeiron, princípio ilimitado e interminável de todas as coisas.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Anaxímenes",
    "dica": "Filósofo que considerava o ar como princípio de todas as coisas.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Heráclito",
    "dica": "Filósofo que defendia o fluxo constante da realidade e considerava o fogo seu princípio.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Logos",
    "dica": "Princípio ou lei cósmica que organiza e governa todas as coisas segundo Heráclito.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Parmênides",
    "dica": "Filósofo que defendia que o ser é eterno, imóvel e não pode deixar de ser.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Leucipo",
    "dica": "Filósofo considerado um dos primeiros formuladores da teoria dos átomos.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Demócrito",
    "dica": "Filósofo que defendia que os seres eram formados por agrupamentos de átomos.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Átomo",
    "dica": "Partícula indivisível que, segundo Leucipo e Demócrito, formava tudo o que existe.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Pitágoras",
    "dica": "Filósofo que relacionava a origem e a estrutura do Universo à matemática e aos números.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Números",
    "dica": "Realidades fundamentais que, para Pitágoras, estavam na origem de todas as coisas.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Sócrates",
    "dica": "Filósofo que voltou a filosofia para o conhecimento de si e para a investigação dos conceitos.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Só sei que nada sei",
    "dica": "Expressão atribuída a Sócrates que representa o reconhecimento da própria ignorância.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Doxa",
    "dica": "Opinião pessoal que pode mudar e não representa necessariamente um conhecimento verdadeiro.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Método socrático",
    "dica": "Método baseado no diálogo, nas perguntas e na identificação de contradições.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Ironia socrática",
    "dica": "Estratégia de Sócrates de fingir ignorância para questionar e conduzir o interlocutor ao conhecimento.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Maiêutica",
    "dica": "Método socrático de ajudar o interlocutor a descobrir e desenvolver suas próprias ideias.",
    "tema": "Pré-socráticos e Sócrates"
  },
  {
    "palavra": "Refutação",
    "dica": "Processo de mostrar contradições nas afirmações do interlocutor durante o diálogo socrático.",
    "tema": "Pré-socráticos e Sócrates"
  }
]


    },

    {titulo: "03 Filosofia: Política e Arte no mundo grego",
      imghome: image,
      frases: [
  {
    "palavra": "Democracia",
    "dica": "Sistema político criado em Atenas baseado na participação dos cidadãos.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Atenas",
    "dica": "Cidade-Estado grega onde surgiu a primeira experiência de democracia.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Cidades-Estado",
    "dica": "Cidades independentes que organizavam politicamente a Grécia Antiga.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Pólis",
    "dica": "Termo grego usado para designar a cidade e sua organização política.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Oligarquia",
    "dica": "Sistema político em que o poder fica concentrado nas mãos de poucas pessoas.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Cidadania",
    "dica": "Condição política que permitia aos homens livres atenienses participar da vida pública.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Filosofia",
    "dica": "Investigação racional ligada aos debates sobre verdade, justiça e política.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Justiça",
    "dica": "Questão filosófica relacionada às leis e à organização da sociedade.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Péricles",
    "dica": "Líder ateniense que fortaleceu a democracia e incentivou as artes e a cultura.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Classicismo",
    "dica": "Período de grande desenvolvimento das artes, filosofia e ciência na Grécia.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Helenismo",
    "dica": "Período de mistura da cultura grega com tradições de outros povos.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Alexandre o Grande",
    "dica": "Rei macedônico que expandiu o império e difundiu a cultura grega.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Sofistas",
    "dica": "Pensadores que dominavam a retórica e as técnicas de persuasão.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Retórica",
    "dica": "Arte de apresentar ideias e convencer outras pessoas.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Sócrates",
    "dica": "Filósofo que buscava a verdade por meio do diálogo e do questionamento.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Dialética socrática",
    "dica": "Método baseado no diálogo e no questionamento para investigar ideias.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Platão",
    "dica": "Filósofo discípulo de Sócrates que desenvolveu a teoria das ideias.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Mundo sensível",
    "dica": "Mundo percebido pelos sentidos segundo Platão.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Mundo inteligível",
    "dica": "Mundo das ideias ou formas considerado verdadeiro por Platão.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Teoria das ideias",
    "dica": "Concepção de Platão segundo a qual as coisas sensíveis são cópias das ideias.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Aristóteles",
    "dica": "Filósofo discípulo de Platão que desenvolveu estudos sobre ser, natureza e metafísica.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Metafísica",
    "dica": "Investigação sobre o ser, as primeiras causas e os princípios de tudo que existe.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Substância",
    "dica": "Para Aristóteles, união entre matéria e forma que constitui aquilo que uma coisa é.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Essência",
    "dica": "Aquilo que uma coisa necessariamente é.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Tragédia grega",
    "dica": "Forma teatral marcada por conflitos, destino, família e elementos religiosos.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Édipo-Rei",
    "dica": "Tragédia de Sófocles sobre Édipo e o cumprimento de uma profecia.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "A República",
    "dica": "Obra de Platão que apresenta sua crítica às artes miméticas e sua cidade ideal.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Catarse",
    "dica": "Efeito produzido pelas tragédias sobre o espectador segundo Aristóteles.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Poética",
    "dica": "Obra de Aristóteles dedicada à arte e especialmente à tragédia.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Escolas helenísticas",
    "dica": "Correntes filosóficas voltadas para questões relacionadas à vida e à tranquilidade.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Ceticismo",
    "dica": "Corrente que questiona a possibilidade de alcançar certezas definitivas.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Estoicismo",
    "dica": "Escola que defendia o domínio das paixões e a busca pela paz por meio da razão.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Epicurismo",
    "dica": "Escola fundada por Epicuro que buscava a tranquilidade do espírito.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Hedonismo",
    "dica": "Corrente que considera o prazer um elemento fundamental para uma vida boa.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Cinismo",
    "dica": "Escola que valorizava uma vida simples e independente das convenções sociais.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Pirronismo",
    "dica": "Corrente cética que defendia a suspensão do julgamento.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Epicuro",
    "dica": "Filósofo grego fundador do epicurismo.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Sensacionismo",
    "dica": "Concepção epicurista que considera as sensações como critério da verdade e do bem.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Zenão de Cítio",
    "dica": "Filósofo fundador do estoicismo.",
    "tema": "Política e Arte grega"
  },
  {
    "palavra": "Razão",
    "dica": "Capacidade humana usada pelos estoicos para controlar as paixões.",
    "tema": "Política e Arte grega"
  }
]
    },

    {
  titulo: "04 Filosofia: Ética, utopia e distopia",
  imghome: img,
  frases: [
    
    {
      "palavra": "A República",
      "dica": "Principal diálogo político de Platão, dedicado à justiça na alma humana e na comunidade política.",
      "tema": "Platão"
    },
    {
      "palavra": "Justiça",
      "dica": "Para Platão, é a harmonia entre as diferentes partes da alma e entre as classes da comunidade política.",
      "tema": "Platão"
    },
    {
      "palavra": "Doxa",
      "dica": "Opinião ou saber aparente, que não corresponde necessariamente ao conhecimento verdadeiro.",
      "tema": "Platão"
    },
    {
      "palavra": "Episteme",
      "dica": "Conhecimento verdadeiro e fundamentado, alcançado pela compreensão racional.",
      "tema": "Platão"
    },
    {
      "palavra": "Teoria das Ideias",
      "dica": "Concepção platônica segundo a qual a realidade verdadeira está nas ideias ou essências, e não apenas no mundo sensível.",
      "tema": "Platão"
    },
    {
      "palavra": "Techné",
      "dica": "Arte ou técnica orientada por conhecimento e voltada para a realização de uma finalidade.",
      "tema": "Platão"
    },
    {
      "palavra": "Bem",
      "dica": "Para Platão, é a ideia suprema que orienta o conhecimento e as ações humanas.",
      "tema": "Platão"
    },
    {
      "palavra": "Harmonia",
      "dica": "Organização equilibrada das diferentes partes, considerada por Platão como fundamento da justiça.",
      "tema": "Platão"
    },
    {
      "palavra": "Pleonexia",
      "dica": "Desejo de possuir cada vez mais, associado à busca de poder e satisfação dos próprios interesses.",
      "tema": "Platão"
    },
    {
      "palavra": "Alegoria da Caverna",
      "dica": "Narrativa de Platão que representa a passagem da ignorância para o conhecimento e a verdade.",
      "tema": "Platão"
    },
    {
      "palavra": "Giges",
      "dica": "Personagem que encontra um anel capaz de torná-lo invisível e passa a cometer injustiças sem medo de ser reconhecido.",
      "tema": "Platão"
    },
    {
      "palavra": "Anel de Giges",
      "dica": "Objeto mágico usado por Platão para questionar se as pessoas seriam justas caso pudessem agir sem sofrer punição.",
      "tema": "Platão"
    },
    {
      "palavra": "Antígona",
      "dica": "Tragédia de Sófocles em que a personagem desafia uma ordem do governante em nome de leis não escritas.",
      "tema": "Ética e política"
    },
    {
      "palavra": "Direito natural",
      "dica": "Conjunto de princípios considerados universais e independentes das leis criadas pelos governos.",
      "tema": "Ética e política"
    },
    {
      "palavra": "Direito positivo",
      "dica": "Conjunto de leis criadas pelos governos, que pode variar conforme a época, o lugar e as circunstâncias.",
      "tema": "Ética e política"
    },
    
    {
      "palavra": "Grande Irmão",
      "dica": "Líder do mundo de 1984, símbolo do poder autoritário que vigia e controla constantemente a população.",
      "tema": "Distopia"
    },
    {
      "palavra": "Liberdade",
      "dica": "Valor relacionado à capacidade de agir e pensar sem submissão injustificada ao controle de outros.",
      "tema": "Ética e política"
    },
    {
      "palavra": "Aristóteles",
      "dica": "Filósofo grego e aluno de Platão que desenvolveu uma ética baseada na felicidade e no cultivo das virtudes.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Ética a Nicômaco",
      "dica": "Principal tratado ético de Aristóteles, dedicado à felicidade, às virtudes e à finalidade das ações humanas.",
      "tema": "Aristóteles"
    },

    {
      "palavra": "Eudaimonia",
      "dica": "Felicidade entendida por Aristóteles como realização plena da natureza humana e da vida.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Logos",
      "dica": "Razão ou linguagem que permite ao ser humano pensar, comunicar-se e distinguir o justo do injusto.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Virtude",
      "dica": "Excelência na realização de uma ação ou finalidade, desenvolvida por meio da prática e do hábito.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Vício",
      "dica": "Disposição ou hábito que leva à falta de excelência ou à realização inadequada de uma ação.",
      "tema": "Aristóteles"
    },
    
    {
      "palavra": "Prudência",
      "dica": "Virtude intelectual que permite avaliar racionalmente como agir diante de situações práticas.",
      "tema": "Aristóteles"
    },

    {
      "palavra": "Coragem",
      "dica": "Virtude que encontra o equilíbrio entre a covardia e o excesso de confiança diante do perigo.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Autocontrole",
      "dica": "Capacidade de orientar racionalmente desejos e emoções para agir de acordo com uma finalidade boa.",
      "tema": "Aristóteles"
    },

    {
      "palavra": "Caráter",
      "dica": "Conjunto de disposições formadas pelos hábitos e pelas escolhas que orientam a maneira de agir.",
      "tema": "Aristóteles"
    },
  
    {
      "palavra": "Proporcionalidade",
      "dica": "Princípio segundo o qual partes diferentes podem receber direitos, deveres ou recompensas diferentes conforme seus méritos.",
      "tema": "Aristóteles"
    },
    {
      "palavra": "Democracia ateniense",
      "dica": "Sistema político de Atenas que permitia a participação direta de cidadãos, mas excluía grande parte da população.",
      "tema": "Política grega"
    },
    {
      "palavra": "Sofistas",
      "dica": "Pensadores que questionaram valores tradicionais e enfatizaram o caráter convencional de muitas normas sociais.",
      "tema": "Política grega"
    },
    {
      "palavra": "Relativismo",
      "dica": "Concepção segundo a qual valores como verdade, justiça, beleza e moralidade podem depender de opiniões ou convenções.",
      "tema": "Política grega"
    },
    {
      "palavra": "Escrita",
      "dica": "Tecnologia que se disseminou na Grécia e contribuiu para registrar leis e ampliar o questionamento da vida coletiva.",
      "tema": "Filosofia e sociedade"
    },
    {
      "palavra": "Oralidade",
      "dica": "Forma de transmissão do conhecimento baseada principalmente na palavra falada, predominante antes da disseminação da escrita.",
      "tema": "Filosofia e sociedade"
    },
    {
      "palavra": "Racionalidade",
      "dica": "Capacidade de utilizar a razão para analisar, questionar e buscar explicações para a realidade.",
      "tema": "Filosofia e sociedade"
    },
    {
      "palavra": "Moralidade",
      "dica": "Dimensão da vida humana relacionada aos valores, normas e formas de agir consideradas boas ou justas.",
      "tema": "Filosofia e sociedade"
    }
  ]
}

    

  
];