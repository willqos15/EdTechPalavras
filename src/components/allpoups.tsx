import { AiFillThunderbolt } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import Poup from '../components/poup';
import { GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { MdChangeCircle } from "react-icons/md";
import { useState, useEffect, useMemo } from 'react'
import Classes from "./classes";
import { normalizar } from "./normalizar";

type Aluno = {
    nome: string;
}


interface Fraseparams {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}

type objtentativa = {
    equipe: string;
    tentativa: string;
    fase: number;
    observacao?: string;
}

interface Poupprops {
    turma: Aluno[];
    setTurma: React.Dispatch<React.SetStateAction<Aluno[]>>
    poupacerto: boolean;
    poupdica: boolean;
    poupsword: boolean;
    poupduvidas: boolean;
    poupimg: boolean;
    poupsorteio: boolean;
    poupsobre: boolean;
    disabledica: boolean;
    pouperro: boolean,
    poupconfig: boolean,
    poupback: boolean,

    setPoupAcerto: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupDica: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSWord: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupDuvidas: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupImg: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSorteio: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSobre: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableDica: React.Dispatch<React.SetStateAction<boolean>>;
    setHelp: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupErro: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupConfig: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupBack: React.Dispatch<React.SetStateAction<boolean>>;


    complete: number[];
    frases: Fraseparams[];
    fase: number;
    sorteio: string;
    sortear: () => void;
    erro: string[];
    nameb: string;
    namey: string;
    namer: string;
    namep: string;
    errob: string[]
    erroy: string[]
    error: string[]
    errop: string[]
    team: number


    setComplete: React.Dispatch<React.SetStateAction<number[]>>;
    setPtBlue: React.Dispatch<React.SetStateAction<number>>;
    setPtYellow: React.Dispatch<React.SetStateAction<number>>;
    setPtRed: React.Dispatch<React.SetStateAction<number>>;
    setPtGreen: React.Dispatch<React.SetStateAction<number>>;
    setEnerB: React.Dispatch<React.SetStateAction<number>>;
    setEnerY: React.Dispatch<React.SetStateAction<number>>;
    setEnerR: React.Dispatch<React.SetStateAction<number>>;
    setEnerP: React.Dispatch<React.SetStateAction<number>>;
    setErroB: React.Dispatch<React.SetStateAction<string[]>>;
    setErroY: React.Dispatch<React.SetStateAction<string[]>>;
    setErroR: React.Dispatch<React.SetStateAction<string[]>>;
    setErroP: React.Dispatch<React.SetStateAction<string[]>>;
    setArrayErro: React.Dispatch<React.SetStateAction<objtentativa[]>>;
    setArrayAcerto: React.Dispatch<React.SetStateAction<objtentativa[]>>;
    setAlertErro: React.Dispatch<React.SetStateAction<number>>;
    setAlertAcerto: React.Dispatch<React.SetStateAction<number>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;

    img: string;
    dica: string;
    digi: string[]


    totalTime: number;
    timeLeft: number;
}




export default function AllPoups({ img, poupacerto, setComplete, setPtBlue, setPtYellow, setPtRed, setPtGreen, frases, fase, setPoupAcerto, poupdica,
    setPoupDica,
    setEnerB,
    setEnerY,
    setEnerR,
    setEnerP,
    setHelp,
    disabledica,
    setDisableDica,
    poupsword,
    setPoupSWord,
    complete,
    poupduvidas,
    setPoupDuvidas,
    poupimg,
    setPoupImg,
    poupsorteio,
    setPoupSorteio,
    sorteio,
    sortear,
    poupsobre: poupturma,
    setPoupSobre,
    erro,
    pouperro,
    setPoupErro,
    setErroB,
    setErroY,
    setErroR,
    setErroP,
    setArrayErro,
    setArrayAcerto,
    turma,
    setTurma,
    poupconfig,
    setPoupConfig,
    setAlertErro,
    setAlertAcerto,
    setPoupBack,
    poupback,
    setPage,
    team,

    dica,
    digi,
    totalTime, timeLeft


}: Poupprops) {


    const [mlista, setMLista] = useState<boolean>(false);

    const [observacao, setObservacao] = useState<string>("")

    useEffect(() => {
        if (turma.length > 0) {
            setMLista(true)
        }
        else { setMLista(false) }
    }, [turma])


    const progress = useMemo(() => {

        if (totalTime <= 0) return 0

        return (timeLeft / totalTime) * 100

    }, [timeLeft, totalTime])

    function getProgressColor() {

        if (timeLeft === 0) {
            return "bg-red-600"
        }

        if (progress <= 25) {
            return "bg-orange-500"
        }

        if (progress <= 50) {
            return "bg-yellow-400"
        }

        return "bg-blue-600"
    }

    function formatTime(seconds: number) {

        const minutes = Math.floor(seconds / 60)

        const remainingSeconds = seconds % 60

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`
    }


    return (<>







        < Poup
            titulo={<> <p className='inline-block'> AVISO </p> </>}
            show={poupback}
            modo='confirma'
            qtdbtn={4}
            f1={() => {
                setPage("home")
                setPoupBack(false)
            }}
            f2={() => {
                setPoupBack(false)
            }}

            close={() => { setPoupBack(false) }}

            descricao={<>
                <p className='p-2 text-center'>Deseja voltar ao menu?</p></>}
        />




        < Poup
            titulo={< p className='inline-block ' > NOTIFICAÇÕES </p >}
            show={poupconfig} modo='info'
            close={() => setPoupConfig(false)}
            descricao={
                < div className='tduvida h-fit mt-2 overflow-y-auto px-2 py-2 flex flex-col gap-2 '>

                    <section className="flex justify-start">
                        <p className="whitespace-nowrap">Notificar Erro:</p>
                        <select className="bg-[#e6eae1] w-full" onChange={(e) => setAlertErro(Number(e.target.value))}>
                            <option value="1">Desativado</option>
                            <option value="5">ao atingir 5 erros</option>
                            <option value="7">ao atingir 7 erros</option>
                            <option value="10">ao atingir 10 erros</option>
                            <option value="15">ao atingir 15 erros</option>
                            <option value="20">ao atingir 20 erros</option>
                            <option value="30">ao atingir 30 erros</option>
                        </select>
                    </section>

                    <section className="flex justify-start">
                        <p className="whitespace-nowrap">Notificar Acerto:</p>
                        <select className="bg-[#e6eae1] w-full" onChange={(e) => setAlertAcerto(Number(e.target.value))}>
                            <option value="1">Desativado</option>
                            <option value="5">ao atingir 5 acertos</option>
                            <option value="7">ao atingir 7 acertos</option>
                            <option value="10">ao atingir 10 acertos</option>
                            <option value="15">ao atingir 15 acertos</option>
                            <option value="20">ao atingir 20 acertos</option>
                            <option value="30">ao atingir 30 acertos</option>
                        </select>
                    </section>

                </div >
            } />



        <Poup
            titulo={< p className='inline-block text-4xl' >
                INCORRETO! </p >}
            show={pouperro}
            modo='time'
            qtdbtn={4}
            team={team}
            color="bg-red-700"

            f1={() => {
                setErroB(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: "B", tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            f2={() => {
                setErroY(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: "Y", tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            f3={() => {
                setErroR(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: "R", tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            f4={() => {
                setErroP(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: "G", tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            close={() => {
                setPoupErro(false)
                setObservacao("")
            }}

            descricao={<div className="w-full flex flex-col justify-center items-center">
                <p className='w-50 px-2 text-center'>Quem errou a palavra?</p>


                <div className="flex items-center cursor-pointer" onClick={() => setMLista(!mlista)}>
                    {turma.length > 0 &&

                        <>
                            <MdChangeCircle />

                            {mlista ? "Modo lista" : "Modo texto"}
                        </>
                    }
                </div>

                {mlista && turma.length > 0 ?
                    <select value={observacao} onChange={(e) => setObservacao(e.target.value)}
                        className="bg-[#e6eae1] my-2">
                        <option value="">Nenhum</option>
                        {turma.map(x => <option value={x.nome} key={x.nome}>{x.nome}</option>)}
                    </select> : <>
                        <textarea className="max-h-96 min-h-10 w-11/12 bg-[#e6eae1] px-2"
                            placeholder="Digite o nome do aluno aqui"
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)} />
                    </>
                }


            </div >}
        />

        < Poup
            titulo={
                < p className='inline-block text-4xl' >
                    CORRETO! </p >
            }
            show={poupacerto}
            modo='time'
            qtdbtn={4}
            team={team}
            color="bg-green-700"
            f1={() => {
                setPtBlue(ant => ant + 1)
                setArrayAcerto(arr => [...arr, { equipe: "B", tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}
            f2={() => {
                setPtYellow(ant => ant + 1)

                setArrayAcerto(arr => [...arr, { equipe: "Y", tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}

            f3={() => {
                setPtRed(ant => ant + 1)

                setArrayAcerto(arr => [...arr, { equipe: "R", tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}

            f4={() => {
                setPtGreen(ant => ant + 1)

                setArrayAcerto(arr => [...arr, { equipe: "G", tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}

            close={() => { setPoupAcerto(false) }}

            descricao={< div className="w-full flex flex-col justify-center items-center" >
                <p className='text-3xl'> {frases[fase].palavra}</p>
                <p className='w-50 px-2 my-2 text-center'>Quem acertou a palavra?</p>


                <div className="flex items-center cursor-pointer" onClick={() => setMLista(!mlista)}>
                    {turma.length > 0 &&
                        <MdChangeCircle />
                    }
                    {mlista && turma.length > 0 ? "Modo lista" : !mlista && turma.length > 0 ? "Modo texto" : ""}
                </div>

                {mlista && turma.length > 0 ?
                    <select value={observacao} onChange={(e) => setObservacao(e.target.value)}
                        className="bg-[#e6eae1] my-2">
                        <option value="">Nenhum</option>
                        {turma.map(x => <option value={x.nome} key={x.nome}>{x.nome}</option>)}
                    </select> : <>
                        <textarea className="max-h-96 min-h-10 w-11/12 bg-[#e6eae1] px-2"
                            placeholder="Digite o nome do aluno aqui"
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)} />
                    </>}


            </div >}
        />







        < Poup
            titulo={<><p className='inline-block'> Custa 1 de </p> <AiFillThunderbolt className='inline-block' /></>}
            show={poupdica}
            team={team}
            modo='time' qtdbtn={5}
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
                setEnerR(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)


            }}

            f4={() => {
                setEnerP(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)


            }}

            f5={() => {
                setPoupDica(false)
                setHelp(true)


            }}

            close={() => { setPoupDica(false) }}

            descricao={<>
                <p className='p-2 text-center'>Informe qual equipe solicitou a dica</p></>} />


        < Poup
            titulo={<> <p className='inline-block'> </p> </>}
            show={disabledica}
            modo='info'
            close={() => { setDisableDica(false) }}

            descricao={<div className="flex gap-4 m-4 flex-col items-center justify-center">

                <div className="flex items-center gap-4">

                    <div className="
                                h-8
                                w-50
                                overflow-hidden
                                rounded-full
                                bg-slate-200
                            ">

                        <div
                            className={`
                                        h-full
                                        rounded-full
                                        transition-[width]
                                        duration-1000
                                        ease-linear
                                        ${getProgressColor()}
                                    `}
                            style={{
                                width: `${progress}%`,
                            }}
                        />

                    </div>

                    <span
                        className={`
                                shrink-0
                                text-4xl
                                font-bold
                                tabular-nums
                                ${timeLeft === 0
                                ? "text-red-600"
                                : "text-slate-800"
                            }
                            `}
                    >
                        {formatTime(timeLeft)}
                    </span>

                </div>





                <p className='p-2 text-4xl text-center max-w-200'>Dica: {dica}</p>




                <div className='select-none flex sm:gap-2 gap-1 justify-center px-2'>
                    {frases[fase].palavra.split("").map((letra) => (
                        <div className={`${letra === " " ? " " : "bg-[#e6eae1]  text-(--asecondary) border-3 "} sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg   rounded-md text-center`}>
                            <span className={

                                (Array.from(digi).map(normalizar)).includes(normalizar(letra))
                                    || normalizar(digi.join("")) === normalizar(frases[fase].palavra)
                                    || complete.includes(fase) || letra === "-"
                                    ? 'opacity-100'
                                    : "opacity-0"
                            }>
                                {letra}
                            </span>
                        </div>
                    ))}


                </div>

                <p className='flex justify-center text-2xl text-(--asecondary)'>
                    {frases[fase].palavra.replace(/[^\p{L}]/gu, "").length} letras
                </p>



                <button
                    className="cursor-pointer bg-(--csecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"
                    onClick={() => {
                        setHelp(false)
                        setDisableDica(false)
                    }}>Desativar Dica</button>
            </div>}
        />


        < Poup
            titulo={< p className='inline-block' > AVISO </p >}
            show={poupsword} modo='confirma'
            qtdbtn={4}
            f1={() => {
                if (!complete.includes(fase)) {
                    setComplete(ant => [...ant, fase])
                    setPoupSWord(false)
                }
            }}
            f2={() => setPoupSWord(false)}
            close={() => setPoupSWord(false)}
            descricao={< p className='p-2 text-center' > Deseja revelar a palavra ?</p >}
        />

        < Poup
            titulo={< p className='inline-block ' > DÚVIDAS </p >}
            show={poupduvidas} modo='info'
            close={() => setPoupDuvidas(false)}
            descricao={
                < div className='tduvida h-96 mr-0 overflow-y-auto px-2 py-2'>

                    < div >
                        <h3>1 - Como a turma é organizada?</h3>
                        <p>A turma é dividida em duas ou quatro equipes.</p>
                    </div >

                    <div>
                        <h3>2 - Quem controla o jogo?</h3>
                        <p>Somente uma pessoa controla os pontos da aplicação, exibindo o jogo em uma TV ou DataShow.</p>
                    </div>


                    <div>
                        <h3>3- Quem começa jogando?</h3>
                        <p>O responsável pode definir manualmente a equipe inicial ou usar a aba "Sorteio".</p>
                    </div>

                    <div>
                        <h3>4 - Como funciona cada rodada?</h3>
                        <p>Um participanet da equipe escolhe uma letra por rodada.</p>
                        <p>O participante só pode jogar novamente após todos de sua equipe participarem.</p>
                    </div>

                    <div>
                        <h3>5 - É permitido adivinhar a palavra inteira?</h3>
                        <p>Sim. O participante pode tentar adivinhar a palavra completa a qualquer momento.</p>
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

                    <span className='flex flex-col justify-center items-center px-2'>



                        <span className='flex flex-col items-start text-sm linkct px-2 text-center'>

                            <a
                                href='https://canoatech.vercel.app/'> <FaGear className='inline-block' />   Desenvolvido por Canoa Tech:</a>

                            <span className='mx-auto text-base'>

                                <a href='https://wa.me/5593991878598'> Contato: (93) 99187-8598 <IoLogoWhatsapp className='inline-block mr-1 ' /></a>
                            </span>



                        </span>

                    </span>

                </div >
            } />


        < Poup
            titulo={<> Imagem: {frases[fase].tema}</>}
            show={poupimg}
            modo='info'
            qtdbtn={4}

            close={() => { setPoupImg(false) }}

            descricao={<>
                <div className='sm:min-w-96 p-1'>
                    <img className='min-w-full' src={frases[fase].imagem ? frases[fase].imagem : img}></img> </div></>}
        />

        < Poup
            titulo={<> SORTEAR </>}
            show={poupsorteio}
            modo='info'
            qtdbtn={4}

            close={() => { setPoupSorteio(false) }}

            descricao={<>
                <div className='flex flex-col justify-center items-center px-2 mt-2 min-w-40'>

                    <p>A equipe sorteada foi</p>
                    <p className='text-2xl'>{
                        sorteio === "load" ? "..." : sorteio

                    }</p>
                    <button onClick={sortear}
                        className='mt-3 cursor-pointer text-(--asecondary) hover:scale-90 transition-all duration-300 w-fit px-2 rounded-md text-4xl'
                    >
                        {sorteio === "load" ? <GiPerspectiveDiceSixFacesFive className='animate-spin' /> :
                            <MdChangeCircle />
                        }

                    </button>
                </div>
            </>}
        />


        < Poup

            titulo={< p className='inline-block ' > Turma </p >}
            show={poupturma} modo='info'
            close={() => setPoupSobre(false)}
            descricao={
                < div className='flex flex-col justify-center items-center px-2' >
                    <Classes turma={turma} setTurma={setTurma} />
                </div >

            } />

    </>)
}