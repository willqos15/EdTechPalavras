import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { FaArrowCircleRight, FaCode } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdChangeCircle, MdEmail } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import logo from '../assets/logo.png'
import { IoIosSave } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { Document, Packer, Paragraph, AlignmentType, TextRun } from "docx";



import Poup from '../components/poup';
import CountCard from '../components/countcard';



type Tdados = { campo: string }

type Tfrases = {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}

export default function Pprincipal() {


    const [digi, setDigi] = useState<string[]>([])
    const [erro, setErro] = useState<string[]>([])
    const [histletra, setHistLetra] = useState<string[]>([])
    const [histpalavra, setHistPalavra] = useState<string[]>([])
    const [histerro, setHistErro] = useState<string[]>([])
    const [help, setHelp] = useState<boolean>(false)
    const [mletra, setMLetra] = useState<boolean>(true)

    async function salvar() {

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
                                    text: `Palavras Completadas: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `${completeb}`,
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
                                    text: `Palavras Completadas: `,
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `${completey}`,
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



    function normalizar(texto: string) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toUpperCase()
    }

    useEffect(() => {
        console.log(digi.length, 'digi leng', digi)
        if (digi.length < 1) return


        if (mletra && [... new Set(Array.from(normalizar(frases[fase].palavra)))].sort().join("") === [... new Set(digi.map(normalizar))].sort().join("")) {


            setErro([])
            setComplete(ant => [...ant, fase])
            setPoupAcerto(true)

        }



        if (!mletra && normalizar(frases[fase].palavra) == normalizar(digi[0])) {
            setErro([])
            setComplete(ant => [...ant, fase])
            setPoupAcerto(true)

        }
    }
        , [digi])



    const { register, handleSubmit, setValue } = useForm({ mode: "onChange", defaultValues: { campo: "" } })

    const frases: Array<Tfrases> = [

        {tema: "Biologia - Genética", palavra: "GENOMA", dica: "Conjunto Completo de genes de um organismo.", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/df/Human_male_karyotpe_high_resolution.jpg" },
        {tema: "Biologia - Genética", palavra: "DNA", dica: "Molécula que carrega a informação genética.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCg9Rjn6qJmJhgi63-LLkBtTF_ay8jrseISg&s" },
        {tema: "Biologia - Genética", palavra: "RNA", dica: "Molécula que transmite a informação do DNA para síntese de proteínas.", imagem: "https://elpais.com/infografias/2020/11/arn/cabecera/cabecera-movil2.jpg?v=6259" },
        {tema: "Biologia - Genética", palavra: "CÉLULA", dica: "Unidade básica da vida.", imagem: "https://static.todamateria.com.br/upload/ce/lu/celulaanimal-0.jpg" },
        {tema: "Biologia - Genética", palavra: "FENÓTIPO", dica: "Expressão observável das características de um organismo, resultado da interação entre genótipo e ambiente.", imagem: "https://static.todamateria.com.br/upload/sh/ut/shutterstock2189929933convertido-cke.jpg" },


        
       {tema: "Português - Gramática", palavra: "SUBSTANTIVO", dica: "Nomeia seres, objetos e lugares.", imagem: "https://static.todamateria.com.br/upload/su/bs/substantivos-og.jpg?class=ogImageWide" },
        {tema: "Português - Gramática", palavra: "VERBO", dica: "Indica ação ou estado.", imagem: "https://f.i.uol.com.br/fotografia/2020/08/25/15983913555f45843b71558_1598391355_3x2_md.jpg" },
        {tema: "Português - Gramática", palavra: "ADJETIVO", dica: "Qualifica o substantivo.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4ruPSaPLirLfjY63cozJQt8nX5yLVNbsfw&s" },
        {tema: "Português - Gramática", palavra: "SUJEITO", dica: "Quem realiza ou recebe o que se diz.", imagem: "https://st4.depositphotos.com/13349494/25169/i/450/depositphotos_251691910-stock-photo-silhouette-man-looking-camera-isolated.jpg" },
        {tema: "Português - Gramática", palavra: "PREDICADO", dica: "O que se diz sobre o sujeito.", imagem: "https://img.freepik.com/fotos-gratis/dedos-note-relatorio-jornalista-enchimento_1150-1044.jpg?semt=ais_hybrid&w=740&q=80" },



       {tema: "Geografia - Internacional", palavra: "OTAN", dica: "Aliança militar ocidental formada para conter a expansão ideológica e militar de blocos rivais.", imagem: "https://eq7xsvyn9ek.exactdn.com/blog/wp-content/uploads/2023/10/O-que-e-OTAN.jpg" },

{tema: "Geografia - Internacional",  palavra: "ONU", dica: "Organização criada após um conflito global para evitar novas guerras e mediar disputas internacionais.", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" },


{tema: "Geografia - Internacional",  palavra: "MARSHALL", dica: "Plano lançado pelo país para reconstruir a Europa Ocidental após a Segunda Guerra Mundial e conter a influência comunista.", imagem: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/logotipo-plano-marshall-criado-pelos-eua-para-divulgar-programa-5661c2f7308d5.jpg" },


{tema: "Geografia - Internacional",  palavra: "VIETNÃ", dica: "Nação do Sudeste Asiático dividida entre Norte comunista e Sul capitalista, palco de guerra intensa com forte intervenção externa entre 1955 e 1975.", imagem: "https://www.thebalancemoney.com/thmb/UseR_mHrkABJ47Esq3aNuAvuFbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515541786-5c2d29cbc9e77c00018fd2a9.jpg" },

{tema: "Geografia - Internacional",  palavra: "COLÔNIA", dica: "Território ocupado e explorado por uma potência estrangeira, gerando tensões históricas.", imagem: "https://static.preparaenem.com/2024/04/engenho-de-acucar-da-epoca-do-brasil-colonia-retratado-em-pintura.jpg" },






       {tema: "English - School Objects",  palavra: "PENCIL", dica: "Tool used for writing or drawing, erasable and often wooden.", imagem: "https://img.freepik.com/vetores-gratis/estilo-liso-redondo-do-lapis_78370-7571.jpg?semt=ais_hybrid&w=740&q=80" },

{tema: "English - School Objects", palavra: "ERASER", dica: "Small item used to remove graphite or ink marks from paper.", imagem: "https://images.tcdn.com.br/img/img_prod/1258915/borracha_escolar_fc_max_pequena_faber_castell_c_capa_2272403_1_75861322dd563233d7afab1953fdfb5e.jpg" },

{tema: "English - School Objects", palavra: "RULER", dica: "Instrument used to measure or draw straight lines.", imagem: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F3006613-01" },

{tema: "English - School Objects", palavra: "BACKPACK", dica: "Item carried on the back to transport books and supplies.", imagem: "https://static.vecteezy.com/ti/fotos-gratis/p2/2694882-menina-crianca-com-bolsa-escola-pronta-para-ir-para-a-escola-gratis-foto.jpg" },


{tema: "English - School Objects", palavra: "GLUE", dica: "Substance used to stick paper or craft materials together.", imagem: "https://www.tilibra.com.br/storage/products/md/cola-branca-120g-lavavel_345563-e1.jpg?c=88f51d10807abf8d5f0097c252673442" },





    ]

    const [fase, setFase] = useState<number>(0)
    const [complete, setComplete] = useState<number[]>([])
    const [completeb, setCompleteB] = useState<string[]>([])
    const [completey, setCompleteY] = useState<string[]>([])


    useEffect(() => {
        if (fase < 0)
            setFase(0)

        if (fase > frases.length)
            setFase(frases.length)
    }, [fase])


    function enviar(dados: Tdados) {

        if (!dados.campo) return



        if (!mletra && normalizar(dados.campo) === normalizar(frases[fase].palavra)) {
            setDigi([dados.campo])
            setHistPalavra(ant => [...ant, dados.campo])
        }


        else if (!mletra) {
            setErro(ant => [...ant, dados.campo])
            setHistErro(ant => [...ant, dados.campo])
        }

        if (mletra && Array.from(normalizar(frases[fase].palavra)).includes((normalizar(dados.campo)))) {
            setDigi(ant => [...ant, dados.campo.toUpperCase()])
            setHistLetra(ant => [...ant, dados.campo.toUpperCase()])
        }

        else if (mletra) {
            setErro(ant => [...ant, dados.campo])
            setHistErro(ant => [...ant, dados.campo])
        }

        setValue("campo", "")

    }


    const [poupdica, setPoupDica] = useState<boolean>(false)
    const [poupsword, setPoupSWord] = useState<boolean>(false)
    const [poupimg,setPoupImg] = useState<boolean>(false)
    const [disabledica, setDisableDica] = useState<boolean>(false)
    const [poupduvidas, setPoupDuvidas] = useState<boolean>(false)
    const [poupsobre, setPoupSobre] = useState<boolean>(false)
    const [enerb, setEnerB] = useState<number>(5)
    const [enery, setEnerY] = useState<number>(5)
    const [ptblue, setPtBlue] = useState<number>(0)
    const [ptyellow, setPtYellow] = useState<number>(0)
    const [poupacerto, setPoupAcerto] = useState<boolean>(false)
    const [comportblue, setComportBlue] = useState<number>(3)
    const [totalptblue, setTotalPtBlue] = useState<number>(0)
    const [comportyellow, setComportYellow] = useState<number>(3)
    const [totalptyellow, setTotalPtYellow] = useState<number>(0)
    const [observblue, setObservBlue] = useState<string>("")
    const [observyellow, setObservYellow] = useState<string>("")
    const [nameb, setNameB] = useState<string>("")
    const [namey, setNameY] = useState<string>("")


    return (<>

        <Poup
            titulo={<><p className='inline-block'>
                VOCÊ ACERTOU! </p></>}
            show={poupacerto}
            modo='time'
            qtdbtn={2}

            f1={() => {
                setPtBlue(ant => ant + 1)
                setCompleteB(ant => [...ant, frases[fase].palavra])
                setPoupAcerto(false)

            }}
            f2={() => {
                setPtYellow(ant => ant + 1)
                setCompleteY(ant => [...ant, frases[fase].palavra])
                setPoupAcerto(false)

            }}

            close={() => { setPoupAcerto(false) }}

            descricao={<>
                <p className='px-2 text-center'> A palavra era {frases[fase].palavra}</p>
                <p className='w-50 px-2 text-center'>Este ponto vai para qual equipe?</p></>}
        />



        <Poup
            titulo={<><p className='inline-block'> Custa 1 de </p> <AiFillThunderbolt className='inline-block' /></>}
            show={poupdica}
            modo='time' qtdbtn={3}
            f1={() => {
                setEnerB(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)
            }}
            f2={() => {
                setEnerY(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)
            }}
            f3={() => {
                setPoupDica(false)
                setHelp(true)
            }}

            close={() => { setPoupDica(false) }}

            descricao={<>
                <p className='p-2 text-center'>Informe qual equipe solicitou a dica</p></>} />


        <Poup
            titulo={<><p className='inline-block'> AVISO </p> </>}
            show={disabledica}
            modo='confirma'
            qtdbtn={2}
            f1={() => {
                setHelp(false)
                setDisableDica(false)
            }}
            f2={() => {
                setDisableDica(false)
            }}

            close={() => { setDisableDica(false) }}

            descricao={<>
                <p className='p-2 text-center'>Deseja desativar a dica?</p></>}
        />


        <Poup
            titulo={<p className='inline-block'> AVISO </p>}
            show={poupsword} modo='confirma'
            qtdbtn={2}
            f1={() => {
                if (!complete.includes(fase)) {
                    setComplete(ant => [...ant, fase])
                    setPoupSWord(false)
                }
            }}
            f2={() => setPoupSWord(false)}
            close={() => setPoupSWord(false)}
            descricao={<p className='p-2 text-center'>Deseja revelar a palavra?</p>}
        />

        <Poup
            titulo={<p className='inline-block '> DÚVIDAS </p>}
            show={poupduvidas} modo='info'
            close={() => setPoupDuvidas(false)}
            descricao={
                <div className='tduvida h-96 mr-0 
                overflow-y-auto px-2 py-2'>

                    <div>
                        <h3>1 - Como a turma é organizada?</h3>
                        <p>A turma é dividida em duas equipes: Azul e Amarela.</p>
                    </div>

                    <div>
                        <h3>2 - Quem controla o jogo?</h3>
                        <p>Somente o professor controla a aplicação, exibindo o jogo em uma TV ou DataShow.</p>
                    </div>


                    <div>
                        <h3>3- Quem começa jogando?</h3>
                        <p>O professor pode definir manualmente a equipe inicial ou usar a aba "Sorteio".</p>
                    </div>

                    <div>
                        <h3>4 - Como funciona cada rodada?</h3>
                        <p>Um aluno da equipe escolhe uma letra por rodada.</p>
                        <p>O aluno só pode jogar novamente após todos de sua equipe participarem.</p>
                    </div>

                    <div>
                        <h3>5 - É permitido adivinhar a palavra inteira?</h3>
                        <p>Sim. O aluno pode tentar adivinhar a palavra completa a qualquer momento.</p>
                        <p>Se acertar, a equipe ganha o ponto imediatamente.</p>
                    </div>

                    <div>
                        <h3>6 - Existe ajuda durante a rodada?</h3>
                        <p>A equipe pode revelar uma dica da palavra com custo de 1 ponto de energia.</p>
                    </div>

                    <div>
                        <h3>7 - Como funciona a pontuação por comportamento?</h3>
                        <p>A equipe recebe Bônus ou Penalidade no placar total a depender do comportamento.</p>
                        <p>- Comportamento muito ruim: <strong>-2 pontos</strong></p>
                        <p>- Comportamento ruim: <strong>-1 ponto</strong></p>
                        <p>- Comportamento mediano: <strong>0 ponto</strong></p>
                        <p>- Comportamento bom: <strong>+1 ponto</strong></p>
                        <p>- Comportamento muito bom: <strong>+2 pontos</strong></p>
                    </div>

                    <div>
                        <h3>8 - Como se ganha o jogo?</h3>
                        <p>Ganha a equipe que somar mais pontos ao final, considerando acertos e comportamento.</p>
                    </div>

                    <div>
                        <h3>9 - As regras são fixas?</h3>
                        <p>Não. As regras podem ser adaptadas conforme a necessidade do professor.</p>
                    </div>

                </div>
            } />


             <Poup
            titulo={<> Imagem: {frases[fase].tema}</>}
            show={poupimg}
            modo='info'
            qtdbtn={2}

            close={() => { setPoupImg(false) }}

            descricao={<>
                <div className='sm:min-w-96 p-1'> 
                <img className='min-w-full'  src={frases[fase].imagem}></img> </div></>}
        />


        <Poup

            titulo={<p className='inline-block '> SOBRE </p>}
            show={poupsobre} modo='info'
            close={() => setPoupSobre(false)}
            descricao={
                <div className='flex flex-col justify-center items-center px-2'>
                    <p className='max-w-50 mt-3 text-center'>
                        Aplicação Web desenvolvida com React, Typescript e Tailwind.
                    </p>

                    <hr className='border my-2' />

                    <p className='text-center'>
                        <FaGear className='inline-block' />
                        Desenvolvido por William Queiroz: </p>
                    <div className='flex flex-col items-start text-sm linkct px-2 text-center'>

                        <a
                            href='https://queirozdeveloper.vercel.app/'> <FaCode className='inline-block mr-1' />  Portfólio: queirozdeveloper.vercel.app</a>

                        <div className='mx-auto text-xl'>
                            <a href='https://www.linkedin.com/in/william-queiroz-a36573120/'> <FaLinkedin className='inline-block mr-1' /></a>
                            <a href='mailto:willqos15@gmail.com' className='cursor-pointer'> <MdEmail className='inline-block mr-1' /> </a>
                            <a href='https://github.com/dashboard/'> <FaGithub className='inline-block mr-1' /></a>
                            <a href='wa.me/5593991878598'> <IoLogoWhatsapp className='inline-block mr-1 ' /></a>
                        </div>



                    </div>

                </div>

            } />


        <div className='flex flex-row justify center items-center sm:h-screen'>
            <div className='flex flex-row flex-wrap sm:gap-5 gap-y-3 gap-x-2 justify-center items-start mx-auto sm:p-0 my-2'>




                <div className='xl:order-1 order-2'>
                    <CountCard
                        equipe="Time Azul"
                        name={nameb}
                        setName={setNameB}
                        bgcolor='bg-blue-900'
                        titlecolor='text-white'
                        textcolor="text-blue-950"
                        statee={enerb}
                        setStateE={setEnerB}
                        pt={ptblue}
                        setPt={setPtBlue}
                        setComport={setComportBlue}
                        comport={comportblue}
                        setTotalPt={setTotalPtBlue}
                        totalpt={totalptblue}
                        observ={observblue}
                        setObserv={setObservBlue}
                    />
                </div>





                <div className='lg:order-2 order-1 flex flex-row justify-center items-center lg:w-fit w-full sm:mb-6 mb-0'>
                    <div className='sm:w-fit w-full block mx-auto'>

                        <div className='w-full'>

                            <div className='flex flex-row justify-start gap-3 items-end mx-auto'>
                                <img
                                    src={logo}
                                    className='h-8 bg-[#F7CD21] px-5 p-1 rounded-t-md'
                                ></img>






                                <div
                                    onClick={() => setPoupDuvidas(!poupduvidas)}
                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 hover:bg-white transition-all duration-300'>
                                    <FaQuestionCircle /> <p className='sm:flex hidden'>
                                        Dúvidas</p>
                                </div>

                                <div
                                    onClick={() => setPoupSobre(!poupsobre)}

                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <TbWorld /> <p className='sm:flex hidden'>Sobre</p>
                                </div>

                                <div
                                    onClick={salvar}
                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <IoIosSave /> <p className='sm:flex hidden'>Salvar</p>
                                </div>

                            </div>

                            <div className='sm:w-130 min-w-full text-[#21285C] bg-white sm:rounded-lg rounded-tr-lg h-fit mx-auto '>

                                <div className='text-3xl font-bold bg-[#F7CD21] px-5 flex items-center h-12 justify-between sm:rounded-tr-lg rounded-0 w-full'>


                                    <h1 className='inline-block text-color[#2D3194] py-2 sm:text-3xl text-2xl'>
                                        {frases[fase].tema}
                                    </h1>

                                    <div className='flex items-end h-full'>
                                        <p className=' inline-block bg-white sm:text-3xl text-xl rounded-t-md px-2 h-10 pt-1'>{fase + 1 <= 9 ? '0' + (fase + 1) : fase + 1}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-white'>

                                <div className='flex justify-center gap-x-2 items-center py-3 h-40'>

                                    <button
                                        onClick={() => {
                                            setFase(ant => ant - 1)
                                            setDigi([])
                                            setHelp(false)
                                        }}
                                        className={

                                            ` bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full ml-1 sm:text-4xl text-2xl flex justify-center items-center font-bold  ${fase > 0 ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`
                                        }>
                                        <FaArrowCircleLeft />
                                    </button>

                                    <div onClick={()=>setPoupImg(true)}
                                    className='flex items-center w-40 h-35 px-2'>

                                    <img
                                


                                        className="
                                        w-auto
                                        object-cover object-center
                                        select-none rounded-xl"


                                        src={frases[fase].imagem}></img>

                                        </div>

                                    <button
                                        onClick={() => {
                                            setFase(ant => ant + 1)
                                            setDigi([])
                                            setHelp(false)
                                        }}
                                        className={
                                            ` bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full sm:text-4xl text-2xl mr-1 flex justify-center items-center font-bold  ${fase <= (frases.length - 2) ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`
                                        }>
                                        <FaArrowCircleRight />
                                    </button>

                                </div>

                                <div className='select-none flex sm:gap-2 gap-1 justify-center px-2'>
                                    {frases[fase].palavra.split("").map((letra) => (
                                        <div className="sm:w-8 sm:text-4xl sm:py-3 py-1 w-5 text-lg bg-[#e6eae1]  px-1  rounded-md text-[#21285C] border-3 text-center">
                                            <span className={
                                                (Array.from(digi).map(normalizar)).includes(normalizar(letra)) || normalizar(digi.join("")) === normalizar(frases[fase].palavra) || complete.includes(fase) ?
                                                    'opacity-100'
                                                    :
                                                    "opacity-0"}>
                                                {letra}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className='cursor-pointer flex flex-row justify-center items-center gap-3'>
                                    <button
                                        onClick={() => {
                                            if (!help) { setPoupDica(true) }
                                            if (help) {
                                                setDisableDica(true)
                                                console.log(disabledica, "valor")
                                            }
                                        }}
                                        className={`h-fit py-1 px-3 rounded-xl my-3 bg-[#21285C] transition-all duration-300 w-fit max-w-96 flex flex-row items-center text-white
                    ${help ? "" : " hover:text-yellow-300"}`}>

                                        <span className='flex flex-col justify-center items-center w-fit'>

                                            <FaLightbulb
                                                className={`text-xl ${help ? 'text-yellow-300' :
                                                    ''}`} />

                                        </span>
                                        <span

                                            className={`cursor-pointer wrap-normal text-center max-w-80 px-2 '}`}>
                                            {help ? frases[fase].dica : 'Dica desativada'}</span>
                                    </button>

                                    <button
                                        onClick={() => {

                                            if (!complete.includes(fase))
                                                setPoupSWord(true)

                                            if (complete.includes(fase)) {
                                                setComplete(ant => ant.filter(x => x !== fase))
                                                setDigi([])
                                            }

                                        }
                                        }
                                        className={`cursor-pointer h-8 px-3 rounded-xl my-3 bg-[#21285C] transition-all duration-300 w-fit div flex flex-row items-center text-2xl text-white
                    ${help ? "" : " hover:text-yellow-300"}`}>
                                        {complete.includes(fase) ?
                                            <IoMdEyeOff /> : <IoMdEye />
                                        }

                                    </button>

                                </div>

                                <hr className='border-2' />
                                <div className='flex items-center relative w-fit px-5 mx-auto'>

                                    <button
                                        onClick={() => setMLetra(!mletra)}
                                        className='cursor-pointer ml-4 px-2 h-fit flex flex-row items-center absolute sm:-left-20 -left-11'>
                                        <MdChangeCircle className={`text-2xl ${complete.includes(fase) ? 'text-gray-400' : 'text-[#21285C]'}`} />
                                        <p className='sm:flex hidden'>
                                            {mletra ? 'Letra' : 'Palavra'}
                                        </p>


                                    </button>


                                    <form onSubmit={handleSubmit(enviar)}>
                                        <div className='flex gap-2 items-center'>
                                            <input
                                                {...register("campo", { required: true })}
                                                disabled=
                                                {complete.includes(fase) ? true : false}
                                                autoComplete="off"
                                                maxLength={complete.includes(fase) ? 0 : mletra ? 1 : 25}
                                                placeholder={complete.includes(fase) ? 'COMPLETADO' : mletra ? 'Digite uma letra' : 'Digite uma palavra'}
                                                className={`uppercase my-3 sm:w-60 sm:text-xl text-base w-35 h-11 sm:px-3 px-1 rounded-sm border-3 ${complete.includes(fase) ? 'bg-green-800 text-white text-center opacity-100' : 'bg-[#e6eae1]'}`} type="text"
                                                onChange={(e) => setValue("campo", e.target.value.toUpperCase())}

                                            />


                                            <button type='submit'
                                                disabled={complete.includes(fase) ? true : false}
                                                className="cursor-pointer mx-0 h-fit absolute -right-2.5" > <IoSend className={` text-2x ${complete.includes(fase) ? 'text-gray-400' : 'text-[#21285C]'}`} />
                                            </button>


                                        </div>

                                    </form>
                                </div>




                                {erro.length > 0 &&
                                    <div className='flex justify-center text-center mt-0 m-3 px-3 w-11/12 pb-1 whitespace-nowrap'>



                                        <p className='font-bold text-[#21285C] text-center pr-2'> Erros: </p>



                                        <div className='overflow-x-auto overflow-y-hidden y-20 max-w-96'>
                                            <p className='font-bold text-red-600 px-2'>
                                                {!mletra && erro[erro.length - 1].length < 2 ? 'Não é permitido enviar letras no "modo Palavra".'
                                                    : [... new Set(erro)].join(" , ").toUpperCase()}</p>
                                        </div>




                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:order-3 order-2'>
                    <CountCard
                        equipe="Time Amarelo"
                        name={namey}
                        setName={setNameY}
                        bgcolor='bg-[#F7CD21]'
                        titlecolor='text-yellow-1000'
                        textcolor="text-yellow-950"
                        statee={enery}
                        setStateE={setEnerY}
                        pt={ptyellow}
                        setPt={setPtYellow}
                        setComport={setComportYellow}
                        comport={comportyellow}
                        setTotalPt={setTotalPtYellow}
                        totalpt={totalptyellow}
                        observ={observyellow}
                        setObserv={setObservYellow}
                    />
                </div>







            </div>
        </div>
    </>)
}