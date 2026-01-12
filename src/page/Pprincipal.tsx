import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import logo from '../assets/logo.png'
import { IoIosSave } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";




import Poup from '../components/poup';
import CountCard from '../components/countcard';

type Tdados = { campo: string }

type Tfrases = {
    palavra: string
    dica: string
    imagem?: string
}

export default function Pprincipal() {


    const [digi, setDigi] = useState<string[]>([])
    const [erro, setErro] = useState<string[]>([])

    const [help, setHelp] = useState<boolean>(false)
    const [mletra, setMLetra] = useState<boolean>(true)



    function normalizar(texto: string) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toUpperCase()
    }

    useEffect(() => {
        console.log(digi.length, 'digi leng', digi)
        if (digi.length < 1) return

        console.log("fase", fase)
        console.log("complete", complete)
        console.log('completeinclude fase', complete.includes(fase))

        if (mletra && [... new Set(Array.from(normalizar(frases[fase].palavra)))].sort().join("") === normalizar([... new Set(digi)].sort().join(""))) {


            setErro([])
            setComplete(ant => [...ant, fase])

        }



        if (!mletra && normalizar(frases[fase].palavra) == normalizar(digi[0])) {
            setErro([])
            setComplete(ant => [...ant, fase])

        }
    }
        , [digi])



    const { register, handleSubmit, setValue } = useForm({ mode: "onChange", defaultValues: { campo: "" } })

    const frases: Array<Tfrases> = [
        { palavra: "ÉTER", dica: "acento teste", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pM2Gzej2rVpvCY0kYukuiqhNZNQsb0GFlQ&s" },
        { palavra: "GENOMA", dica: "Conjunto Completo de genes de um organismo.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbq1a3LjC6ORXpBR_LFFq26Bbig046ZhpZPA&s" },
        { palavra: "DNA", dica: "Molécula que carrega a informação genética.", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUKqhStT-7Bfk8i2qOBdzWLbIAemRJ-4gHg&s" },
        { palavra: "RNA", dica: "Molécula que transmite a informação do DNA para síntese de proteínas.", imagem: "https://netnature.wordpress.com/wp-content/uploads/2015/01/dna1.png" },
        { palavra: "CÉLULA", dica: "Unidade básica da vida.", imagem: "https://lh5.googleusercontent.com/proxy/ZMEpFMMO2M2BWH9yz7AKWQe8WjTw7acBaQFont-F461AteLkV7G7s15nC88tVKdxR6eqRMw4vJh4m2rJd-BDTC7O4vGR7p5GLyoRJGELNwXpujQufB6f0oB7MEJFXqEfl0pw4ZQpTc2UXidH9K4crctJ9TEMfCbDN-gosiiJRUY9yh8XcI7RB6ZGt595E0i9HabTan5dsjRT0IJ-hIoc" },


    ]

    const [fase, setFase] = useState<number>(0)
    const [complete, setComplete] = useState<number[]>([])


    useEffect(() => {
        if (fase < 0)
            setFase(0)

        if (fase > frases.length)
            setFase(frases.length)
    }, [fase])


    function enviar(dados: Tdados) {

        if (!dados.campo) return

        if (!mletra && normalizar(dados.campo) === normalizar(frases[fase].palavra))
            setDigi([dados.campo])

        else if (!mletra)
            setErro(ant => [...ant, dados.campo])

        if (mletra && Array.from(normalizar(frases[fase].palavra)).includes((normalizar(dados.campo)).toUpperCase()))
            setDigi(ant => [...ant, dados.campo.toUpperCase()])

        else if (mletra)
            setErro(ant => [...ant, dados.campo])

        setValue("campo", "")

    }


    const [poupdica, setPoupDica] = useState<boolean>(false)
    const [poupsword, setPoupSWord] = useState<boolean>(false)
    const [disabledica, setDisableDica] = useState<boolean>(false)
    const [enerb, setEnerB] = useState<number>(5)
    const [enery, setEnerY] = useState<number>(5)



    return (<>

        <Poup
            titulo={<><p className='inline-block'> Custa 1 de </p> <AiFillThunderbolt className='inline-block' /></>}
            show={poupdica}
            modo='time'
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
                <p>Informe qual equipe solicitou a dica</p></>} />


        <Poup
            titulo={<><p className='inline-block'> AVISO </p> </>}
            show={disabledica}
            modo='confirma'
            f1={() => {
                setHelp(false)
                setDisableDica(false)
            }}
            f2={() => {
                setDisableDica(false)
            }}

            close={() => { setDisableDica(false) }}

            descricao={<>
                <p>Deseja desativar a dica?</p></>}
        />


        <Poup
            titulo={<><p className='inline-block'> AVISO </p> </>}
            show={poupsword}
            modo='confirma'
            f1={() => {
                if (!complete.includes(fase))
                    setComplete(ant => [...ant, fase])
                setPoupSWord(false)
            }}
            f2={() => {
                setPoupSWord(false)
            }}

            close={() => { setPoupSWord(false) }}

            descricao={<>
                <p>Deseja revelar a palavra?</p></>}
        />


        <div className='flex flex-row justify-between w-[90dvw]'>



            <CountCard
                equipe="Time Azul"
                bgcolor='bg-blue-900'
                titlecolor='text-white'
                textcolor="text-blue-950"
                statee={enerb}
                setStateE={setEnerB} />




            <div>
                <div className='flex flex-row w-130 justify-start gap-3 items-end '>
                    <img
                    src={logo}
                    className='h-8 bg-[#F7CD21] px-5 p-1 rounded-t-md
                    hover:bg-white transition-all duration-300'
                ></img>

                    
                   



                    <div className='h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 hover:bg-white transition-all duration-300'>
                        <FaQuestionCircle /> Dúvidas
                    </div>

                    <div className='h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                        <TbWorld /> Sobre
                    </div>

                    <div className='h-8 bg-[#F7CD21] px-2 pt-1 rounded-t-md text-[#2D3097] text-xl flex items-center gap-1 transition-all duration-300 hover:bg-white'>
                        <IoIosSave /> Salvar
                    </div>

                </div>

                <div className='w-130 text-[#21285C] bg-white rounded-lg h-112-5'>

                    <div className='text-3xl font-bold bg-[#F7CD21] px-5 flex items-center h-12 justify-between rounded-r-lg'>


                        <h1 className='inline-block text-color[#2D3194] py-2'>
                            Biologia 2º Semestre - Genética
                        </h1>

                        <div className='flex items-end h-full'>
                            <p className='inline-block bg-white text-3xl rounded-t-md px-2 h-10 pt-1'>{fase + 1 <= 9 ? '0' + (fase + 1) : fase + 1}</p>
                        </div>
                    </div>

                    <div className='flex justify-center gap-x-5 items-center py-3 h-40'>

                        <button
                            onClick={() => {
                                setFase(ant => ant - 1)
                                setDigi([])
                                setHelp(false)
                            }}
                            className={fase > 0 ? 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold ' : 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold opacity-0 pointer-events-none'}>
                            <FaArrowCircleLeft />
                        </button>

                        <img

                            className="select-none h-fit w-40 rounded-xl
                        transform-[transformation] duration-300
                        "


                            src={frases[fase].imagem}></img>

                        <button
                            onClick={() => {
                                setFase(ant => ant + 1)
                                setDigi([])
                                setHelp(false)
                            }}
                            className={fase <= (frases.length - 2) ? 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold ' : ' bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold  opacity-0 pointer-events-none'}>
                            <FaArrowCircleRight />
                        </button>

                    </div>

                    <div className='select-none flex gap-2 justify-center'>
                        {frases[fase].palavra.split("").map((letra) => (
                            <div className="w-13 bg-[#e6eae1] text-4xl px-2 py-3 rounded-md text-[#21285C] border-3">
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

                    <div className='flex flex-row justify-center items-center gap-3'>
                        <button
                            onClick={() => {
                                if (!help) { setPoupDica(true) }
                                if (help) {
                                    setDisableDica(true)
                                    console.log(disabledica, "valor")
                                }
                            }}
                            className={`h-14 px-3 rounded-xl my-3 bg-[#21285C] transition-all duration-300 w-fit flex flex-row items-center text-white
                    ${help ? "" : " hover:text-yellow-300"}`}>

                            <span className='flex flex-col justify-center items-center w-fit'>

                                <FaLightbulb
                                    className={`text-4xl ${help ? 'text-yellow-300' :
                                        ''}`} />

                            </span>
                            <span

                                className={`wrap-normal text-center max-w-80 px-2 '}`}>
                                {help ? frases[fase].dica : 'Dica desativada'}</span>
                        </button>

                        <button
                            onClick={() => {

                                if (!complete.includes(fase))
                                    setPoupSWord(true)

                                if (complete.includes(fase))
                                    setComplete(ant => ant.filter(x => x !== fase))

                            }
                            }
                            className={`h-14 px-3 rounded-xl my-3 bg-[#21285C] transition-all duration-300 w-fit div flex flex-row items-center text-3xl text-white
                    ${help ? "" : " hover:text-yellow-300"}`}>
                            {complete.includes(fase) ?
                                <IoMdEyeOff /> : <IoMdEye />
                            }

                        </button>

                    </div>

                    <hr className='border-2' />
                    <div className='flex justify-center items-center'>

                        <button
                            onClick={() => setMLetra(!mletra)}
                            className='ml-4 px-2 h-fit flex flex-row items-center cursor-pointer'>
                            <MdChangeCircle className='text-2xl' />
                            {mletra ? 'Letra' : 'Palavra'}


                        </button>


                        <form onSubmit={handleSubmit(enviar)}>
                            <div className='flex gap-2 items-center px-10'>
                                <input
                                    {...register("campo", { required: true })}
                                    maxLength={mletra ? 1 : 40}
                                    placeholder={mletra ? 'Digite uma letra aqui' : 'Digite uma palavra aqui'}
                                    className="uppercase my-3 bg-[#e6eae1] w-60 h-11 px-3 border-4" type="text"
                                    onChange={(e) => setValue("campo", e.target.value.toUpperCase())}

                                />


                                <button type='submit'
                                    className="mx-0 h-fit " > <IoSend className='text-[#21285C] text-2xl' />
                                </button>


                            </div>

                        </form>
                    </div>
                    {erro.length > 0 &&
                        <div className='flex justify-center text-center mt-0 m-3 px-3 w-11/12 pb-1 whitespace-nowrap'>

                            <p className='font-bold text-[#21285C] text-center pr-2'> Erros: </p>

                            <div className=' overflow-x-auto max-w-96'>
                                <p className='bg-red-100 rounded-xl font-bold text-red-600 px-2'> {[... new Set(erro)].join(" , ").toUpperCase()}</p>
                            </div>



                        </div>
                    }

                </div>
            </div>


            <CountCard
                equipe="Time Amarelo"
                bgcolor='bg-[#F7CD21]'
                titlecolor='text-yellow-1000'
                textcolor="text-yellow-950"
                statee={enery}
                setStateE={setEnerY} />







        </div>
    </>)
}