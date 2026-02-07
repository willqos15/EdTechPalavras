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


interface Docparams{
    complete: number[];
    frases: Fraseparams[];
    histletra: string[];
    histpalavra: string[];
    histerro: string[];
    nameb:string;
    namey:string;
    comportblue:number;
    comportyellow:number;
    enerb:number;
    enery:number;
    observblue:string; 
    observyellow:string;
    totalptyellow: number; 
    totalptblue: number;
    arrayacerto: objtentativa[];
    arrayerro: objtentativa[];
}

export const Save = async ({complete,frases,histletra,histpalavra,histerro,nameb,namey,comportyellow, comportblue,observblue, observyellow, totalptyellow, totalptblue, enerb,enery,arrayacerto, arrayerro}:Docparams)=> 
    {console.log("oi")

        const tempo = new Date()

        const doc = new Document({
            sections:
                [{
                    children:
                        [new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `2º Semestre Biologia`,
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

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Equipe Azul${nameb.length > 0 ? ` (${nameb})` : ''}: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `${totalptblue}pts`,
                                    size: 25,
                                })
                            ]
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${arrayacerto.filter(x => x.equipe === nameb && x.tentativa.length>0).length} Palavras Completadas: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ` ${arrayacerto.filter(x => x.equipe === nameb && x.tentativa.length>0).map(x=> ` ${x.tentativa} <=(${x.observacao})`)}`,
                                    size: 25,
                                })
                            ]
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${arrayerro.filter(x => x.equipe === nameb).length} Erros: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ` ${arrayerro.filter(x => x.equipe === nameb && x.tentativa.length>0).map(x=> ` ${x.tentativa} <=(${x.observacao})`)}`,
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
                                    text: `${comportblue === 1 ? "Muito ruim!" :
                                        comportblue === 2 ? "Ruim" :
                                            comportblue === 3 ? "Mediano" :
                                                comportblue === 4 ? "Bom" :
                                                    comportblue === 5 ? "Muito Bom!" : ""
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
                                    text: `${enerb}`,
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
                                    text: `${observblue.length > 0 ? observblue : 'Nenhuma'}`,
                                    size: 25,

                                }),
                            ]
                        }),



                        new Paragraph(``),



                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Equipe Amarela${namey.length > 0 ? ` (${namey})` : ''}: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `${totalptyellow}pts`,
                                    size: 25,
                                })
                            ]
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${arrayacerto.filter(x => x.equipe === namey && x.tentativa.length>0).length} Palavras Completadas: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ` ${arrayacerto.filter(x => x.equipe === namey && x.tentativa.length>0).map(x=> ` ${x.tentativa} <=(${x.observacao})`)
                                    }`,
                                    size: 25,
                                })
                            ]
                        }),

                         new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${arrayerro.filter(x => x.equipe === namey).length} Erros: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ` ${arrayerro.filter(x => x.equipe === namey && x.tentativa.length>0).map(x=> ` ${x.tentativa} <=(${x.observacao})`)}`,
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
                                    text: `${comportyellow === 1 ? "Muito ruim!" :
                                        comportyellow === 2 ? "Ruim" :
                                            comportyellow === 3 ? "Mediano" :
                                                comportyellow === 4 ? "Bom" :
                                                    comportyellow === 5 ? "Muito Bom!" : ""
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
                                    text: `${enery}`,
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
                                    text: `${observyellow.length > 0 ? observyellow : 'Nenhuma'}`,
                                    size: 25,

                                }),
                            ]
                        }),
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