import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
// import logo from '../assets/logo.png'
import { IoIosSave } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { Save } from '../components/save';

import CountCard from '../components/countcard';
import AllPoups from '../components/allpoups';
import { normalizar } from '../components/normalizar';
import Timer from '../components/timer';
import falar, { somAcerto, tocarBipeComFrequencia } from '../components/sounds';

import ControlSound from '../components/controlSound';
import NotificationButton from '../components/NotificationButton';



type Tdados = { campo: string }

type Tfrases = {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}

type Aluno = {
    nome: string;
}

type Props = {
    team: number,
    perguntas: Tfrases[]
    img: string
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function PQuiz({ team, perguntas, img, setPage }: Props) {
    const [modeSound, setModeSound] = useState(true)
    const [turma, setTurma] = useState<Aluno[]>([])
    const [digi, setDigi] = useState<string[]>([])
    const [erro, setErro] = useState<string[]>([])
    const [histletra, setHistLetra] = useState<string[]>([])
    const [histpalavra, setHistPalavra] = useState<string[]>([])
    const [histerro, setHistErro] = useState<string[]>([])
    const [help, setHelp] = useState<boolean>(false)
    const [mletra, setMLetra] = useState<boolean>(true)
    const [fase, setFase] = useState<number>(0)
    const [complete, setComplete] = useState<number[]>([])
    const [pouperro, setPoupErro] = useState<boolean>(false)
    const [sorteio, setSorteio] = useState<string>("")
    const [poupsorteio, setPoupSorteio] = useState<boolean>(false)
    const [poupdica, setPoupDica] = useState<boolean>(false)
    const [poupsword, setPoupSWord] = useState<boolean>(false)
    const [poupimg, setPoupImg] = useState<boolean>(false)
    const [poupacerto, setPoupAcerto] = useState<boolean>(false)
    const [disabledica, setDisableDica] = useState<boolean>(false)
    const [poupduvidas, setPoupDuvidas] = useState<boolean>(false)
    const [poupTurma, setPoupTurma] = useState<boolean>(false)
    const [poupconfig, setPoupConfig] = useState<boolean>(false)
    const [alerterro, setAlertErro] = useState<number>(0)
    const [alertacerto, setAlertAcerto] = useState<number>(0)
    const [poupback, setPoupBack] = useState<boolean>(false)




    const [dica, setDica] = useState<string>('')

    const [enerb, setEnerB] = useState<number>(3)
    const [comportblue, setComportBlue] = useState<number>(3)
    const [totalptblue, setTotalPtBlue] = useState<number>(0)
    const [ptblue, setPtBlue] = useState<number>(0)
    const [observblue, setObservBlue] = useState<string>("")
    const [nameb, setNameB] = useState<string>("Equipe Azul")
    const [errob, setErroB] = useState<string[]>([])


    const [enery, setEnerY] = useState<number>(3)
    const [comportyellow, setComportYellow] = useState<number>(3)
    const [totalptyellow, setTotalPtYellow] = useState<number>(0)
    const [ptyellow, setPtYellow] = useState<number>(0)
    const [observyellow, setObservYellow] = useState<string>("")
    const [namey, setNameY] = useState<string>("Equipe Amarela")
    const [erroy, setErroY] = useState<string[]>([])

    const [enerr, setEnerR] = useState<number>(3)
    const [comportred, setComportRed] = useState<number>(3)
    const [totalptred, setTotalPtRed] = useState<number>(0)
    const [ptred, setPtRed] = useState<number>(0)
    const [observred, setObservRed] = useState<string>("")
    const [namer, setNameR] = useState<string>("Equipe Vermelha")
    const [error, setErroR] = useState<string[]>([])

    const [energ, setEnerG] = useState<number>(3)
    const [comportgreen, setComportGreen] = useState<number>(3)
    const [totalptgreen, setTotalPtGreen] = useState<number>(0)
    const [ptgreen, setPtGreen] = useState<number>(0)
    const [observgreen, setObservGreen] = useState<string>("")
    const [nameg, setNameG] = useState<string>("Equipe Verde")
    const [errog, setErroG] = useState<string[]>([])



    type objtentativa = {
        equipe: string;
        tentativa: string;
        fase: number;
        descricao?: string;
    }


    const [arrayerro, setArrayErro] = useState<objtentativa[]>([])
    const [arrayacerto, setArrayAcerto] = useState<objtentativa[]>([])

    const initialTime = 120
    const [totalTime, setTotalTime] = useState(initialTime)
    const [timeLeft, setTimeLeft] = useState(initialTime)

    useEffect(() => {
        if (timeLeft <= 10 && timeLeft > 0) { tocarBipeComFrequencia(800, 100) }

        if (timeLeft == 0) { tocarBipeComFrequencia(700, 2000) }
    }
        , [timeLeft])





    useEffect(() => {
        setDica(frases[fase].dica)
    }, [fase])

    useEffect(() => {

        if (digi.length < 1) return

        if (mletra && [... new Set(Array.from(normalizar(frases[fase].palavra)))].sort().join("") === [... new Set(digi.map(normalizar))].sort().join("")) {

            setComplete(ant => [...ant, fase])
            setPoupAcerto(true)
        }

        if (!mletra && normalizar(frases[fase].palavra) == normalizar(digi[0])) {

            setComplete(ant => [...ant, fase])
            setPoupAcerto(true)
        }
    }
        , [digi])



    const { register, handleSubmit, setValue, } = useForm({ mode: "onChange", defaultValues: { campo: "" } })
    const [campo, setCampo] = useState<string>("")

    useEffect(() => { setCampo("") }
        , [mletra])


    const frases: Array<Tfrases> = perguntas


    useEffect(() => {
        if (fase < 0)
            setFase(0)

        if (fase > frases.length) {
            setFase(frases.length)

        }
    }, [fase])




    async function enviar(dados: Tdados) {

        if (!dados.campo) return

        setCampo("")

        if (!mletra && normalizar(dados.campo) === normalizar(frases[fase].palavra)) {
            setDigi([dados.campo])
            setHistPalavra(ant => [...ant, dados.campo])

        }


        else if (!mletra) {
            setErro(ant => [...ant, dados.campo])
            setHistErro(ant => [...ant, dados.campo])
            setPoupErro(true)
        }

        if (mletra && Array.from(normalizar(frases[fase].palavra)).includes((normalizar(dados.campo)))) {
            setDigi(ant => [...ant, dados.campo.toUpperCase()])
            setHistLetra(ant => [...ant, dados.campo.toUpperCase()])
            await somAcerto()
            falar('Acertou! Mais uma chance!')

        }

        else if (mletra) {
            setErro(ant => [...ant, dados.campo])
            setHistErro(ant => [...ant, dados.campo])
            setPoupErro(true)
        }

        setValue("campo", "")

    }

    function sortear() {

        const names: string[] =
            team === 2
                ? [nameb, namey]
                : [nameb, namey, namer, nameg];

        const sort = names[Math.floor(Math.random() * names.length)];
        setSorteio("load")
        setTimeout(() => {
            setSorteio(sort)
        }, 1500);
    }




    return (<>

        <AllPoups
            timeLeft={timeLeft}
            totalTime={totalTime}
            fase={fase}
            frases={frases}
            complete={complete}
            sorteio={sorteio}
            sortear={sortear}
            poupacerto={poupacerto}
            poupdica={poupdica}
            poupsword={poupsword}
            poupduvidas={poupduvidas}
            poupimg={poupimg}
            poupsorteio={poupsorteio}
            poupsobre={poupTurma}
            disabledica={disabledica}
            setPoupAcerto={setPoupAcerto}
            setPoupDica={setPoupDica}
            setPoupSWord={setPoupSWord}
            setPoupDuvidas={setPoupDuvidas}
            setPoupImg={setPoupImg}
            setPoupSorteio={setPoupSorteio}
            setPoupSobre={setPoupTurma}
            setDisableDica={setDisableDica}
            setHelp={setHelp}
            help={help}
            setComplete={setComplete}
            dica={dica}

            setPtBlue={setPtBlue}
            setPtYellow={setPtYellow}
            setPtRed={setPtRed}
            setPtGreen={setPtGreen}
            setEnerB={setEnerB}
            setEnerY={setEnerY}
            setEnerR={setEnerR}
            setEnerG={setEnerG}
            setPoupErro={setPoupErro}
            erro={erro}
            setErroB={setErroB}
            setErroY={setErroY}
            setErroR={setErroR}
            setErroG={setErroG}
            errob={errob}
            erroy={erroy}
            error={error}
            errop={errog}
            pouperro={pouperro}
            nameb={nameb}
            namey={namey}
            namer={namer}
            nameg={nameg}
            setArrayErro={setArrayErro}
            setArrayAcerto={setArrayAcerto}
            turma={turma}
            setTurma={setTurma}
            setPoupConfig={setPoupConfig}
            poupconfig={poupconfig}
            setAlertErro={setAlertErro}
            alertErro={alerterro}
            setAlertAcerto={setAlertAcerto}
            alertAcerto={alertacerto}
            poupback={poupback}
            setPoupBack={setPoupBack}
            setPage={setPage}
            team={team}
            img={img}
            digi={digi}
        />

        <NotificationButton
            onClick={() => setPoupConfig(true)}
        />

        <ControlSound modeSound={modeSound} setModeSound={setModeSound} />


        <div className='flex flex-row justify center items-center xl:h-screen'>
            <div className='flex flex-row flex-wrap sm:gap-5 gap-y-3 gap-x-2 justify-center items-start mx-auto h-fit'>


                <div className='xl:order-1 order-2'>
                    {team >= 2 &&
                        <CountCard
                            id='B'
                            equipe={"Equipe Azul"}
                            name={nameb}
                            setName={setNameB}
                            bgcolor='bg-[var(--aprimary)]'
                            titlecolor='text-white'
                            textcolor="text-[var(--asecondary)]"
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
                            erro={errob}
                            arrayerro={arrayerro}
                            arrayacerto={arrayacerto}
                            frases={frases}
                            fase={fase}
                            alerterro={alerterro}
                            alertacerto={alertacerto}
                        />}

                    {team >= 4 && <CountCard
                        id="R"
                        equipe={namer}
                        name={namer}
                        setName={setNameR}
                        bgcolor='bg-[var(--cprimary)]'
                        titlecolor='text-white'
                        textcolor="text-[var(--csecondary)]"
                        statee={enerr}
                        setStateE={setEnerR}
                        pt={ptred}
                        setPt={setPtRed}
                        setComport={setComportRed}
                        comport={comportred}
                        setTotalPt={setTotalPtRed}
                        totalpt={totalptred}
                        observ={observred}
                        setObserv={setObservRed}
                        erro={error}
                        arrayerro={arrayerro}
                        arrayacerto={arrayacerto}
                        frases={frases}
                        fase={fase}
                        alerterro={alerterro}
                        alertacerto={alertacerto}
                    />}
                </div>


                <div className='lg:order-2 order-1 flex flex-row justify-center items-center lg:w-fit w-full mb-0'>
                    <div className='lg:w-fit w-full block mx-auto'>

                        <div className='w-full'>

                            <div className='flex flex-row justify-start gap-2 items-end mx-auto'>
                                <div className='flex items-center justify-center bg-(--bprimary) rounded-t-md cursor-pointer text-(--bsecondary) hover:bg-white transition-all duration-300 px-2 pt-1'
                                    onClick={() => setPoupBack(true)}>
                                    {/* <img src={logo} className='h-8  px-5 p-1 '/> */}

                                    <IoArrowBackCircle className='text-2xl' />
                                    <p className='text-xl sm:flex hidden'>
                                        Voltar</p>
                                </div>
                                <div
                                    onClick={() => setPoupDuvidas(!poupduvidas)}
                                    className='cursor-pointer h-8 bg-(--bprimary)  px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1 hover:bg-white transition-all duration-300'>
                                    <FaQuestionCircle /> <p className='sm:flex hidden'>
                                        Dúvidas</p>
                                </div>

                                <div
                                    onClick={() => {
                                        sortear()
                                        setPoupSorteio(true)
                                    }}
                                    className='cursor-pointer h-8 bg-(--bprimary)  px-2 pt-1 rounded-t-md text-(--bsecondary)  text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <GiPerspectiveDiceSixFacesFive /> <p className='sm:flex hidden'>Sortear</p>
                                </div>

                                <div
                                    onClick={() => setPoupTurma(!poupTurma)}
                                    className='cursor-pointer h-8 bg-(--bprimary)  px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <FaUserGroup /> <p className='sm:flex hidden'>Turma</p>
                                </div>


                                <div
                                    onClick={() => Save({ team, complete, frases, histletra, histpalavra, histerro, nameb, namey, comportyellow, comportblue, observblue, observyellow, totalptyellow, totalptblue, enerb, enery, arrayacerto, arrayerro, namer, comportred, observred, totalptred, enerr, nameg, comportgreen, observgreen, totalptgreen, energ })}
                                    className='cursor-pointer h-8 bg-(--bprimary) px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <IoIosSave /> <p className='sm:flex hidden'>Salvar</p>
                                </div>
                            </div>


                            <div className='sm:w-130 min-w-full text-(--bsecondary) bg-white  h-fit mx-auto '>

                                <div className='text-3xl font-bold bg-(--bprimary) pl-5 pr-2 flex items-center h-12 justify-between w-full'>

                                    <h1 className='inline-block text-color-(--bsecondary) py-2 sm:text-3xl text-2xl'>
                                        {fase + 1 <= 9 ? '0' + (fase + 1) : fase + 1}: {frases[fase].tema}
                                    </h1>

                                    <p className='inline-block bg-white sm:text-2xl text-xl rounded-md px-1 '>
                                        {frases[fase].palavra.replace(/[^\p{L}]/gu, "").length} letras
                                    </p>




                                </div>
                            </div>

                            <div className='bg-white relative'>

                                <Timer fase={fase}
                                    initialTime={initialTime}
                                    setTotalTime={setTotalTime}
                                    setTimeLeft={setTimeLeft}
                                    totalTime={totalTime}
                                    timeLeft={timeLeft} />

                                <div className='flex justify-center gap-x-2 items-center h-fit'>

                                    <button
                                        onClick={() => {
                                            setFase(ant => ant - 1)
                                            setDigi([])
                                            setHelp(false)
                                            setCampo("")
                                        }}
                                        className={
                                            `bg-(--asecondary) text-white hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full sm:text-4xl text-2xl flex justify-center items-center font-bold  ${fase > 0 ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`
                                        }>
                                        <FaArrowCircleLeft />
                                    </button>

                                    <div onClick={() => setPoupImg(true)}
                                        className='flex items-center w-32 h-32 p-2'>
                                        <img className="w-auto mx-auto max-h-30 select-none rounded-xl" src={frases[fase].imagem ? frases[fase].imagem : img} />
                                    </div>

                                    <button
                                        onClick={() => {
                                            setFase(ant => ant + 1)
                                            setDigi([])
                                            setHelp(false)
                                            setCampo("")
                                        }}
                                        className={
                                            ` bg-(--asecondary) text-white hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full sm:text-4xl text-2xl mr-1 flex justify-center items-center font-bold  ${fase <= (frases.length - 2) ? 'cursor-pointer' : 'opacity-0 pointer-events-none'}`
                                        }>
                                        <FaArrowCircleRight />
                                    </button>

                                </div>

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



                                <div className='cursor-pointer flex flex-row justify-center items-center gap-3'>
                                    <button
                                        onClick={() => {
                                            if (!help) { setPoupDica(true) }
                                            if (help) {
                                                setDisableDica(true)
                                                console.log(disabledica, "valor")
                                            }
                                        }}
                                        className={`h-fit py-1 px-3 rounded-xl my-3 bg-(--asecondary) transition-all duration-300 w-fit max-w-96 flex flex-row items-center text-white
                    ${help ? "" : " hover:text-(--bprimary)"}`}>

                                        <span className='flex flex-col justify-center items-center w-fit'>

                                            <FaLightbulb
                                                className={`text-xl ${help ? 'text-(--bprimary)' :
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
                                        className={`cursor-pointer h-8 px-3 rounded-xl my-3 bg-(--asecondary) transition-all duration-300 w-fit div flex flex-row items-center text-2xl text-white
                    ${help ? "" : " hover:text-(--bprimary)"}`}>
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
                                        <MdChangeCircle className={`text-2xl ${complete.includes(fase) ? 'text-gray-400' : 'text-(--asecondary)'}`} />
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
                                                value={campo}
                                                autoComplete="off"
                                                maxLength={complete.includes(fase) ? 0 : mletra ? 1 : 25}
                                                placeholder={complete.includes(fase) ? 'COMPLETADO' : mletra ? 'Digite uma letra' : 'Digite uma palavra'}
                                                className={`uppercase my-3 sm:w-60 sm:text-xl text-base w-35 h-11 sm:px-3 px-1 rounded-sm border-3 ${complete.includes(fase) ? 'bg-green-800 text-white text-center opacity-100' : 'bg-[#e6eae1]'}
                                                ${!complete.includes(fase) && !mletra && campo.length <= 1 ? "bg-red-100" :
                                                        !complete.includes(fase) && !mletra && campo.length > 1 ? "bg-green-100" : null}
                                                `} type="text"
                                                onChange={(e) => {

                                                    setValue("campo", e.target.value.toUpperCase())
                                                    setCampo(e.target.value.toUpperCase())
                                                }}

                                            />


                                            <button type='submit'
                                                disabled={complete.includes(fase) ? true : !mletra && campo.length <= 1 ? true : false}
                                                className={`${complete.includes(fase) ? "hidden" : !mletra && campo.length <= 1 ? "hidden" : null} cursor-pointer mx-0 h-fit absolute -right-2.5`} > <IoSend className={` text-2x ${complete.includes(fase) ? 'text-gray-400' : 'text-(--asecondary)'}`} />
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <p className='font-bold text-red-600 px-2 text-center'>
                                    {!complete.includes(fase) && !mletra && campo.length <= 1 ? 'No modo Palavra, digite a palavra completa. Letras únicas não são permitidas. ' : null}
                                </p>

                                {arrayerro.filter(x => x.fase === fase).length > 0 &&
                                    <div className='flex justify-center text-center mt-0 m-3 px-3 w-11/12 pb-1 whitespace-nowrap'>

                                        <p className='font-bold text-(--asecondary) text-center pr-2'> Erros: </p>

                                        <div className='overflow-x-auto overflow-y-hidden y-20 max-w-96'>
                                            <p className='font-bold text-red-600 px-2'>

                                                <p className="flex gap-2">

                                                    {arrayerro.filter(x => x.fase === fase)
                                                        .map((x) => (
                                                            <>{x.tentativa},</>
                                                        ))
                                                    }

                                                </p>
                                            </p>
                                        </div>

                                    </div>
                                }


                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:order-3 order-2'>
                    {team >= 2 && <CountCard
                        id="Y"
                        equipe={namey}
                        name={namey}
                        setName={setNameY}
                        bgcolor='bg-(--bprimary)'
                        titlecolor='text-(--bsecondary)'
                        textcolor="text-(--bsecondary)"
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
                        erro={erroy}
                        arrayerro={arrayerro}
                        arrayacerto={arrayacerto}
                        frases={frases}
                        fase={fase}
                        alerterro={alerterro}
                        alertacerto={alertacerto}
                    />}

                    {team >= 4 && <CountCard
                        id="G"
                        equipe={nameg}
                        name={nameg}
                        setName={setNameG}
                        bgcolor='bg-(--dprimary)'
                        titlecolor='text-white'
                        textcolor="text-(--dsecondary)"
                        statee={energ}
                        setStateE={setEnerG}
                        pt={ptgreen}
                        setPt={setPtGreen}
                        setComport={setComportGreen}
                        comport={comportgreen}
                        setTotalPt={setTotalPtGreen}
                        totalpt={totalptgreen}
                        observ={observgreen}
                        setObserv={setObservGreen}
                        erro={errog}
                        arrayerro={arrayerro}
                        arrayacerto={arrayacerto}
                        frases={frases}
                        fase={fase}
                        alerterro={alerterro}
                        alertacerto={alertacerto}
                    />}
                </div>


            </div>
        </div>
    </>)
}