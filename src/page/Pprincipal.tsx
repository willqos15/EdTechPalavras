import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { MdChangeCircle } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";



import Poup from '../components/poup';
import CountCard from '../components/countcard';
type Tdados = { campo: string }

type Tfrases = {
    palavra: string
    dica: string
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


        if (mletra && [... new Set(Array.from(normalizar(frases[fase].palavra)))].sort().join("") === normalizar([... new Set(digi)].sort().join(""))) {

            setDigi([])
            setErro([])
            console.log("zerou")

        }


        console.log(normalizar(digi[0]), '=', normalizar(frases[fase].palavra))

        if (!mletra && normalizar(frases[fase].palavra) == normalizar(digi[0])) {
            console.log('DEU CERTO')

        }
    }
        , [digi])



    const { register, handleSubmit, setValue } = useForm({ mode: "onChange", defaultValues: { campo: "" } })

    const frases: Array<Tfrases> = [
        { palavra: "ÉTER", dica: "acento teste" },
        { palavra: "GENOMA", dica: "Conjunto Completo de genes de um organismo." },
        { palavra: "DNA", dica: "Molécula que carrega a informação genética." },
        { palavra: "RNA", dica: "Molécula que transmite a informação do DNA para síntese de proteínas." },
        { palavra: "CÉLULA", dica: "Unidade básica da vida." },]

    const [fase, setFase] = useState<number>(0)

    useEffect(() => {

        if (fase < 0) {
            setFase(0)
        }

        if (fase > frases.length) {
            setFase(frases.length)
        }

        console.log('frases', frases.length)
        console.log('fase', fase)

    }, [fase])


    function enviar(dados: Tdados) {

        if (!dados.campo) return



        if (!mletra && normalizar(dados.campo) === normalizar(frases[fase].palavra)) {
            setDigi([dados.campo])
        }
        else if (!mletra) {
            setErro(ant => [...ant, dados.campo])
        }


        if (mletra && Array.from(normalizar(frases[fase].palavra)).includes((normalizar(dados.campo)).toUpperCase())) {
            setDigi(ant => [...ant, dados.campo.toUpperCase()])
            console.log('acertou')
        }
        else if (mletra) {
            console.log('errou')
            setErro(ant => [...ant, dados.campo])
        }




        setValue("campo", "")

    }


    const [poupdica, setPoupDica] = useState<boolean>(false)
    const [enerb, setEnerB] = useState<number>(5)
    const [enery, setEnerY] = useState<number>(5)

    return (<>

        <Poup
            titulo='AVISO'
            modo={poupdica}
            f1={() => {
                setEnerB(ant => ant - 1)
                setPoupDica(false)
            }}
            f2={() => {
                setEnerY(ant => ant - 1)
                setPoupDica(false)
            }}
            f3={() => { setPoupDica(false) }}
            descricao={<> <p> Dica custa 1 <AiFillThunderbolt className='inline-block' /> </p>
                <p>Informe qual equipe solicitou a dica</p></>} />

        <div className='flex flex-row justify-between w-[90dvw]'>

            

            <CountCard
            equipe="Time Azul"
            bgcolor='bg-blue-900'
            titlecolor='text-white'
            textcolor="text-blue-950"
            statee={enerb}
            setStateE={setEnerB}/>

       





            <div className='w-fit text-[#21285C] bg-white rounded-4xl'>

                <h1 className='text-3xl font-bold bg-[#F7CD21] py-2 px-5'>
                    Biologia - Genética [Desafio: {fase + 1}]
                </h1>

                <div className='flex justify-center gap-x-5 items-center py-3'>

                    <button
                        onClick={() => {
                            setFase(ant => ant - 1)
                            setDigi([])
                        }}
                        className={fase > 0 ? 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold ' : 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold opacity-0 pointer-events-none'}>
                        <FaArrowCircleLeft />
                    </button>

                    <img className='h-fit w-40 rounded-xl' src='https://disruptivaseconectadas.com.br/wp-content/uploads/2022/04/04-04-genoma-humano.png'></img>

                    <button
                        onClick={() => {
                            setFase(ant => ant + 1)
                            setDigi([])
                        }}
                        className={fase <= (frases.length - 2) ? 'bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold ' : ' bg-[#21285C] text-[#F7CD21] hover:scale-110 hover:p-1.4 transition-all duration-300 h-fit p-1 rounded-full text-4xl flex justify-center items-center font-bold  opacity-0 pointer-events-none'}>
                        <FaArrowCircleRight />
                    </button>

                </div>

                <div className='flex gap-2 justify-center'>
                    {frases[fase].palavra.split("").map((letra) => (
                        <span className={
                            (Array.from(digi).map(normalizar)).includes(normalizar(letra)) || normalizar(digi.join("")) === normalizar(frases[fase].palavra) ?

                                "w-13 bg-[#e6eae1] text-4xl px-2 py-1 rounded-md text-[#21285C] border-3" :
                                "w-13 py-2 bg-[#e6eae1] text-4xl px-2 rounded-md text-[#e6eae1] border-3 border-[#21285C]"}>
                            {letra}
                        </span>))
                    }
                </div>

                <div
                    onClick={() => setPoupDica(true)}
                    className="mx-auto py-2 px-3 rounded-xl my-3 bg-[#21285C] text-white w-fit div flex flex-row items-center">

                    <div className='flex flex-col justify-center items-center w-fit'>

                        <FaLightbulb
                            onClick={() => setHelp(!help)}
                            className='text-4xl text-white hover:text-[#F7CD21]' />

                    </div>
                    <p className=' wrap-normal text-center max-w-80 px-2'>
                        {help ? frases[fase].dica : 'Dica desativada'}</p>


                </div>

                <hr className='border-2' />
                <div className='flex justify-center items-center'>

                    <button
                        onClick={() => setMLetra(!mletra)}
                        className='px-2 h-fit flex flex-row items-center cursor-pointer'>
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
                    <div className='flex justify-center text-center mt-0 m-3 px-3 w-11/12 whitespace-nowrap'>

                        <p className='font-bold text-[#21285C] text-center pr-2'> Erros: </p>

                        <div className=' overflow-x-auto max-w-96'>
                            <p className='bg-red-100 rounded-xl font-bold text-red-600 px-2'> {[... new Set(erro)].join(" , ").toUpperCase()}</p>
                        </div>



                    </div>
                }

            </div>


                 <CountCard
            equipe="Time Amarelo"
            bgcolor='bg-[#F7CD21]'
            titlecolor='text-yellow-1000'
            textcolor="text-yellow-950"
            statee={enery}
            setStateE={setEnerY}/>







        </div>
    </>)
}