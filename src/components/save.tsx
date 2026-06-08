import { Document, Packer, Paragraph, AlignmentType, TextRun } from "docx";

interface Fraseparams {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}

type objtentativa = {
    equipe: string;
    tentativa: string,
    fase: number
    observacao?: string
}


interface Docparams {
    team: number;
    complete: number[];
    frases: Fraseparams[];
    histletra: string[];
    histpalavra: string[];
    histerro: string[];

    nameb: string;
    enerb: number;
    comportblue: number;
    observblue: string;
    totalptblue: number;

    namey: string;
    enery: number;
    comportyellow: number;
    observyellow: string;
    totalptyellow: number;

    namer: string;
    enerr: number;
    comportred: number;
    observred: string;
    totalptred: number;

    nameg: string;
    energ: number;
    comportgreen: number;
    observgreen: string;
    totalptgreen: number;

    arrayacerto: objtentativa[];
    arrayerro: objtentativa[];
}


function Paragraph_team(color: string, name: string, totalpt: number, arrayacerto: objtentativa[],
    arrayerro: objtentativa[], comport: number, ener: number, observ: string) {

    return [


        new Paragraph({
            children: [
                new TextRun({
                    text: `Equipe ${color}${name.length > 0 ? ` (${name})` : ''}: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: `${totalpt}pts`,
                    size: 25,
                })
            ]
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: `${arrayacerto.filter(x => x.equipe === name && x.tentativa.length > 0).length} Palavras Completadas: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: ` ${arrayacerto.filter(x => x.equipe === name && x.tentativa.length > 0).map(x => ` ${x.tentativa}${x.observacao?.trim() ? `(${x.observacao.trim()})` : ""}`)}`,
                    size: 25,
                })
            ]
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: `${arrayerro.filter(x => x.equipe === name).length} Erros: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: ` ${arrayerro.filter(x => x.equipe === name && x.tentativa.length > 0).map(x => ` ${x.tentativa}${x.observacao?.trim() ? `(${x.observacao.trim()})` : ""}`)}`,
                    size: 25,
                })
            ]
        }),


        new Paragraph({
            children: [
                new TextRun({
                    text: `Comportamento: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: `${comport === 1 ? "Muito ruim!" :
                        comport === 2 ? "Ruim" :
                            comport === 3 ? "Mediano" :
                                comport === 4 ? "Bom" :
                                    comport === 5 ? "Muito Bom!" : ""
                        }`,
                    size: 25,

                }),
            ]
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: `Energia: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: `${ener}`,
                    size: 25,

                }),
            ]
        }),

        new Paragraph({
            children: [
                new TextRun({
                    text: `Observações: `,
                    size: 25,
                    bold: true,
                }),
                new TextRun({
                    text: `${observ.length > 0 ? observ : 'Nenhuma'}`,
                    size: 25,

                }),
            ]
        }),



        new Paragraph(``)

    ]
}

export const Save = async ({ team, complete, frases, histletra, histpalavra, histerro, arrayacerto, arrayerro, nameb, comportblue, observblue, totalptblue, enerb, namey, comportyellow, observyellow, totalptyellow, enery, namer, comportred, observred, totalptred, enerr, nameg, comportgreen, observgreen, totalptgreen, energ, }: Docparams) => {
    console.log("oi")

    const tempo = new Date()

    const doc = new Document({
        sections:
            [{
                children:
                    [new Paragraph({
                        alignment: AlignmentType.CENTER,
                        children: [
                            new TextRun({
                                text: `Relatório - Jogo da Advinhação`,
                                size: 40,
                                bold: true,
                            })
                        ]

                    }),

                    new Paragraph(``),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Data: `,
                                size: 25,
                                bold: true,


                            }),
                            new TextRun({
                                text: `${tempo.toLocaleDateString("pt-BR")}\t\t`,
                                size: 25,
                            }),

                            new TextRun({
                                text: `Hora: `,
                                size: 25,
                                bold: true,
                            }),

                            new TextRun({
                                text: `${tempo.toLocaleTimeString("pt-BR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}`,
                                size: 25,
                            })
                        ]
                    }),

                    new Paragraph(``),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Níveis completados: `,
                                size: 25,
                                bold: true,
                            }),
                            new TextRun({
                                text: `${complete.map((n) => n + 1)}`,
                                size: 25
                            })

                        ]
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Palavras completadas: `,
                                size: 25,
                                bold: true,
                            }),
                            new TextRun({
                                text: `${complete.map(x => frases[x].palavra)}`,
                                size: 25
                            })

                        ]
                    }),

                    new Paragraph(``),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Letras digitadas corretas: `,
                                size: 25,
                                bold: true,
                            }),
                            new TextRun({
                                text: `${histletra.length > 0 ? histletra : 'Nenhuma'}`,
                                size: 25
                            })

                        ]
                    }),


                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Palavras digitadas corretas: `,
                                size: 25,
                                bold: true,
                            }),
                            new TextRun({
                                text: `${histpalavra.length > 0 ? histpalavra : 'Nenhuma'}`,
                                size: 25
                            })

                        ]
                    }),

                    new Paragraph({
                        children: [
                            new TextRun({
                                text: `Letras e palavras erradas: `,
                                size: 25,
                                bold: true,
                            }),
                            new TextRun({
                                text: `${histerro.length > 0 ? histerro : 'Nenhum'}`,
                                size: 25
                            })

                        ]
                    }),



                    new Paragraph(``),

                    ...Paragraph_team("Azul", nameb, totalptblue, arrayacerto, arrayerro, comportblue, enerb, observblue),

                    ...Paragraph_team("Amarela", namey, totalptyellow, arrayacerto, arrayerro, comportyellow, enery, observyellow),

                    ...(team>2?  
                    Paragraph_team("Vermelha", namer, totalptred, arrayacerto, arrayerro, comportred, enerr, observred): []),

                    ...(team>2?  
                    Paragraph_team("Verde", nameg, totalptgreen, arrayacerto, arrayerro, comportgreen, energ, observgreen): []),





                    ],
            }
            ],
    })

    const blob = await Packer.toBlob(doc)
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "relatorio.docx"
    a.click()
    URL.revokeObjectURL(url)


}