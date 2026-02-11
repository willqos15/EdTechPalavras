import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import logo from '../assets/logo.png'
import { IoIosSave } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

import { GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { Save } from '../components/save';

import CountCard from '../components/countcard';
import AllPoups from '../components/allpoups';



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

export default function Pprincipal() {

     const [turma, setTurma]= useState<Aluno[]> ([])
    const [digi, setDigi] = useState<string[]>([])
    const [erro, setErro] = useState<string[]>([])
    const [histletra, setHistLetra] = useState<string[]>([])
    const [histpalavra, setHistPalavra] = useState<string[]>([])
    const [histerro, setHistErro] = useState<string[]>([])
    const [help, setHelp] = useState<boolean>(false)
    const [mletra, setMLetra] = useState<boolean>(true)
    const [fase, setFase] = useState<number>(0)
    const [complete, setComplete] = useState<number[]>([])
    const [errob,setErroB] = useState<string[]>([])
    const [erroy,setErroY] = useState<string[]>([])
    const [pouperro,setPoupErro] = useState<boolean>(false)
    const [sorteio, setSorteio] = useState<string>("")
    const [poupsorteio, setPoupSorteio] = useState<boolean>(false)
    const [poupdica, setPoupDica] = useState<boolean>(false)
    const [poupsword, setPoupSWord] = useState<boolean>(false)
    const [poupimg, setPoupImg] = useState<boolean>(false)
    const [poupacerto, setPoupAcerto] = useState<boolean>(false)
    const [disabledica, setDisableDica] = useState<boolean>(false)
    const [poupduvidas, setPoupDuvidas] = useState<boolean>(false)
    const [poupTurma, setPoupTurma] = useState<boolean>(false)
    const [enerb, setEnerB] = useState<number>(5)
    const [enery, setEnerY] = useState<number>(5)
    const [ptblue, setPtBlue] = useState<number>(0)
    const [ptyellow, setPtYellow] = useState<number>(0)
    const [comportblue, setComportBlue] = useState<number>(3)
    const [totalptblue, setTotalPtBlue] = useState<number>(0)
    const [comportyellow, setComportYellow] = useState<number>(3)
    const [totalptyellow, setTotalPtYellow] = useState<number>(0)
    const [observblue, setObservBlue] = useState<string>("")
    const [observyellow, setObservYellow] = useState<string>("")
    const [nameb, setNameB] = useState<string>("Equipe Azul")
    const [namey, setNameY] = useState<string>("Equipe Amarela")
    

        type objtentativa = {
            equipe:string;
            tentativa: string;
            fase: number;
            descricao?: string;
        }

      

       const [arrayerro,setArrayErro] =  useState<objtentativa[]>([])
       const [arrayacerto,setArrayAcerto] =  useState<objtentativa[]>([])
      


       
    

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

        { tema: "Biologia - Genética", palavra: "GENOMA", dica: "Conjunto Completo de genes de um organismo.", imagem: "https://upload.wikimedia.org/wikipedia/commons/d/df/Human_male_karyotpe_high_resolution.jpg" },
        { tema: "Biologia - Genética", palavra: "DNA", dica: "Molécula que carrega a informação genética.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCg9Rjn6qJmJhgi63-LLkBtTF_ay8jrseISg&s" },
        { tema: "Biologia - Genética", palavra: "RNA", dica: "Molécula que transmite a informação do DNA para síntese de proteínas.", imagem: "https://elpais.com/infografias/2020/11/arn/cabecera/cabecera-movil2.jpg?v=6259" },
        { tema: "Biologia - Genética", palavra: "CÉLULA", dica: "Unidade básica da vida.", imagem: "https://static.todamateria.com.br/upload/ce/lu/celulaanimal-0.jpg" },
        { tema: "Biologia - Genética", palavra: "FENÓTIPO", dica: "Expressão observável das características de um organismo, resultado da interação entre genótipo e ambiente.", imagem: "https://static.todamateria.com.br/upload/sh/ut/shutterstock2189929933convertido-cke.jpg" },


        { tema: "Português - Gramática", palavra: "SUBSTANTIVO", dica: "Nomeia seres, objetos e lugares.", imagem: "https://static.todamateria.com.br/upload/su/bs/substantivos-og.jpg?class=ogImageWide" },
        { tema: "Português - Gramática", palavra: "VERBO", dica: "Indica ação ou estado.", imagem: "https://f.i.uol.com.br/fotografia/2020/08/25/15983913555f45843b71558_1598391355_3x2_md.jpg" },
        { tema: "Português - Gramática", palavra: "ADJETIVO", dica: "Qualifica o substantivo.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4ruPSaPLirLfjY63cozJQt8nX5yLVNbsfw&s" },
        { tema: "Português - Gramática", palavra: "SUJEITO", dica: "Quem realiza ou recebe o que se diz.", imagem: "https://st4.depositphotos.com/13349494/25169/i/450/depositphotos_251691910-stock-photo-silhouette-man-looking-camera-isolated.jpg" },
        { tema: "Português - Gramática", palavra: "PREDICADO", dica: "O que se diz sobre o sujeito.", imagem: "https://img.freepik.com/fotos-gratis/dedos-note-relatorio-jornalista-enchimento_1150-1044.jpg?semt=ais_hybrid&w=740&q=80" },



        { tema: "Geografia - Internacional", palavra: "OTAN", dica: "Aliança militar ocidental formada para conter a expansão ideológica e militar de blocos rivais.", imagem: "https://eq7xsvyn9ek.exactdn.com/blog/wp-content/uploads/2023/10/O-que-e-OTAN.jpg" },

        { tema: "Geografia - Internacional", palavra: "ONU", dica: "Organização criada após um conflito global para evitar novas guerras e mediar disputas internacionais.", imagem: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg" },
        { tema: "Geografia - Internacional", palavra: "MARSHALL", dica: "Plano lançado pelo país para reconstruir a Europa Ocidental após a Segunda Guerra Mundial e conter a influência comunista.", imagem: "https://s3.static.brasilescola.uol.com.br/be/2024/06/desfile-em-homenagem-ao-plano-marshall.jpg" },
        { tema: "Geografia - Internacional", palavra: "VIETNÃ", dica: "Nação do Sudeste Asiático dividida entre Norte comunista e Sul capitalista, palco de guerra intensa com forte intervenção externa entre 1955 e 1975.", imagem: "https://www.thebalancemoney.com/thmb/UseR_mHrkABJ47Esq3aNuAvuFbQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515541786-5c2d29cbc9e77c00018fd2a9.jpg" },
        { tema: "Geografia - Internacional", palavra: "COLÔNIA", dica: "Território ocupado e explorado por uma potência estrangeira, gerando tensões históricas.", imagem: "https://static.preparaenem.com/2024/04/engenho-de-acucar-da-epoca-do-brasil-colonia-retratado-em-pintura.jpg" },

        { tema: "English - School Objects", palavra: "PENCIL", dica: "Tool used for writing or drawing, erasable and often wooden.", imagem: "https://img.freepik.com/vetores-gratis/estilo-liso-redondo-do-lapis_78370-7571.jpg?semt=ais_hybrid&w=740&q=80" },
        { tema: "English - School Objects", palavra: "ERASER", dica: "Small item used to remove graphite or ink marks from paper.", imagem: "https://images.tcdn.com.br/img/img_prod/1258915/borracha_escolar_fc_max_pequena_faber_castell_c_capa_2272403_1_75861322dd563233d7afab1953fdfb5e.jpg" },
        { tema: "English - School Objects", palavra: "RULER", dica: "Instrument used to measure or draw straight lines.", imagem: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F3006613-01" },
        { tema: "English - School Objects", palavra: "BACKPACK", dica: "Item carried on the back to transport books and supplies.", imagem: "https://static.vecteezy.com/ti/fotos-gratis/p2/2694882-menina-crianca-com-bolsa-escola-pronta-para-ir-para-a-escola-gratis-foto.jpg" },
        { tema: "English - School Objects", palavra: "GLUE", dica: "Substance used to stick paper or craft materials together.", imagem: "https://www.tilibra.com.br/storage/products/md/cola-branca-120g-lavavel_345563-e1.jpg?c=88f51d10807abf8d5f0097c252673442" },
    ]

    

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
            setPoupErro(true)
        }

        if (mletra && Array.from(normalizar(frases[fase].palavra)).includes((normalizar(dados.campo)))) {
            setDigi(ant => [...ant, dados.campo.toUpperCase()])
            setHistLetra(ant => [...ant, dados.campo.toUpperCase()])
        }

        else if (mletra) {
            setErro(ant => [...ant, dados.campo])
            setHistErro(ant => [...ant, dados.campo])
            setPoupErro(true)
        }

        setValue("campo", "")

    }

    function sortear() {

        const sort = Math.random() < 0.5 ? nameb : namey
        setSorteio("load")
        setTimeout(() => {
            setSorteio(sort)
        }, 2000);
    }


    


    return (<>

        <AllPoups
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
            setComplete={setComplete}
     
            setPtBlue={setPtBlue}
            setPtYellow={setPtYellow}
            setEnerB={setEnerB}
            setEnerY={setEnerY}
            setPoupErro={setPoupErro}
            erro={erro}
            setErroB={setErroB}
            setErroY={setErroY}
            pouperro={pouperro}
            nameb={nameb}
            namey={namey}
            setArrayErro={setArrayErro}
            setArrayAcerto={setArrayAcerto}
            errob={errob}
            erroy={erroy}
            turma={turma}
            setTurma={setTurma}
           
        />


        <div className='flex flex-row justify center items-center xl:h-screen'>
            <div className='flex flex-row flex-wrap sm:gap-5 gap-y-3 gap-x-2 justify-center items-start mx-auto sm:p-0 my-24 sm:h-125'>


                <div className='xl:order-1 order-2'>
                    <CountCard
                        equipe={nameb}
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
                        erro={errob}
                        arrayerro={arrayerro}
                        frases={frases}
                        fase={fase}
                    />
                </div>


                <div className='lg:order-2 order-1 flex flex-row justify-center items-center lg:w-fit w-full mb-0'>
                    <div className='lg:w-fit w-full block mx-auto'>

                        <div className='w-full'>

                            <div className='flex flex-row justify-start gap-2 items-end mx-auto'>
                                <img src={logo}
                                    className='h-8 bg-[#F7CD21] px-5 p-1 rounded-t-md'/>

                                 <div
                                    onClick={() => setPoupDuvidas(!poupduvidas)}
                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 hover:bg-white transition-all duration-300'>
                                    <FaQuestionCircle /> <p className='sm:flex hidden'>
                                        Dúvidas</p>
                                </div>

                                <div
                                    onClick={() => {
                                        sortear()
                                        setPoupSorteio(true)
                                    }}
                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <GiPerspectiveDiceSixFacesFive /> <p className='sm:flex hidden'>Sortear</p>
                                </div>

                                



                               

                                <div
                                    onClick={() => setPoupTurma(!poupTurma)}
                                    className='cursor-pointer h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                                    <FaUserGroup /> <p className='sm:flex hidden'>Turma</p>
                                </div>


                                <div
                                    onClick={() => Save({ complete, frases, histletra, histpalavra, histerro, nameb, namey, comportyellow, comportblue, observblue, observyellow, totalptyellow, totalptblue, enerb, enery, arrayacerto, arrayerro })}
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

                                    <div onClick={() => setPoupImg(true)}
                                        className='flex items-center w-45 sm:max-h-30 h-32 px-2'>
                                        <img className="w-auto mx-auto max-h-30 select-none rounded-xl" src={frases[fase].imagem}/>
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
                                        <div className="sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg bg-[#e6eae1]    rounded-md text-[#21285C] border-3 text-center">
                                            <span className={
                                                (Array.from(digi).map(normalizar)).includes(normalizar(letra)) || normalizar(digi.join("")) === normalizar(frases[fase].palavra) || complete.includes(fase) ?'opacity-100':"opacity-0"}>
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
                                                    : erro.join(" , ").toUpperCase()}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:order-3 order-2'>
                    <CountCard
                        equipe={namey}
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
                        erro={erroy}
                        arrayerro={arrayerro}
                        frases={frases}
                        fase={fase}
                    />
                </div>


            </div>
        </div>
    </>)
}