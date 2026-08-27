import { useEffect, useRef, useState } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi";
import Poup from './poup';
import falar from './sounds';

type Tfrases = {
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

interface propcard {
    equipe: string
    bgcolor: string
    titlecolor: string
    textcolor: string
    setStateE: (x: number) => void
    statee: number
    setPt: React.Dispatch<React.SetStateAction<number>>
    pt: number
    setTotalPt: React.Dispatch<React.SetStateAction<number>>
    totalpt: number
    setComport: React.Dispatch<React.SetStateAction<number>>
    comport: number
    setObserv: React.Dispatch<React.SetStateAction<string>>
    observ: string
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
    erro: string[]
    arrayerro: Array<objtentativa>
    arrayacerto: Array<objtentativa>
    frases: Tfrases[]
    fase: number
    alerterro: number
    alertacerto: number
    id: string

}

export default function CountCard({ equipe, bgcolor, titlecolor, textcolor, statee, setStateE, setPt, pt, setTotalPt, totalpt, setComport, comport, observ, setObserv, name, setName, erro, arrayerro, frases, fase, arrayacerto, alerterro, alertacerto, id }: propcard) {


    const [inputeb, setInputEB] = useState<number>(0)
    const [inputpb, setInputPB] = useState<number>(0)
    const [showerro, setShowErro] = useState<boolean>(false)
    const [showacerto, setShowAcerto] = useState<boolean>(false)
    const [showalerterro, setShowAlertErro] = useState<boolean>(false)
    const [showalertacerto, setShowAlertAcerto] = useState<boolean>(false)
    const [showConfig, setShowConfig] = useState<boolean>(false)
    // const [pt, setPt] = useState<number>(0)

  const alertaErroExecutado = useRef(false)

useEffect(() => {
    const quantidadeErros = arrayerro.filter(
        x => x.fase === fase && x.equipe === id
    ).length

    if (quantidadeErros !== alerterro) {
        alertaErroExecutado.current = false
        return
    }

    if (
        alerterro !== 0 &&
        quantidadeErros === alerterro &&
        !alertaErroExecutado.current
    ) {
        alertaErroExecutado.current = true

        setShowAlertErro(true)

        falar(
            `${equipe} atingiu ${alerterro} erros na fase ${fase + 1}!`
        )
    }
}, [alerterro, arrayerro, fase, id])

   

   const alertaAcertoExecutado = useRef(false)

useEffect(() => {
    if (
        alertacerto !== 0 &&
        pt === alertacerto &&
        !alertaAcertoExecutado.current
    ) {
        alertaAcertoExecutado.current = true

        setShowAlertAcerto(true)

        falar(`${equipe} atingiu ${alertacerto} acertos!`)
    }

    // Permite disparar novamente caso a pontuação saia
    // do valor configurado e depois volte para ele.
    if (pt !== alertacerto) {
        alertaAcertoExecutado.current = false
    }

}, [alertacerto, pt, equipe])


    useEffect(() => {
        if (comport == 1)
            setTotalPt(pt - 2)
        if (comport == 2)
            setTotalPt(pt - 1)
        if (comport == 3)
            setTotalPt(pt)
        if (comport == 4)
            setTotalPt(pt + 1)
        if (comport == 5)
            setTotalPt(pt + 2)
    }, [comport, pt])

    //PARA CADA ITEM NO ERRO, PARA CADA FASE, fase 0: erros, erros, erros
    return (<>


        <Poup titulo={<p className="font-bold text-4xl">NOTIFICAÇÃO</p>}
        color="bg-green-700"
            descricao={
                <div className='w-96 flex   flex-col justify-start items-center max-h-96 h-fit pt-4'>
                    <p className='text-lg bg-green-700 text-white px-2 py-1 mb-2 rounded-md'> {equipe} atingiu {alertacerto} acertos!</p>

                    <div className='flex flex-col items-center w-80 mx-auto max-h-64 overflow-y-auto'>

                        {(() => {
                            const acertosDaFase = arrayacerto.filter(
                                x => x.equipe === id)

                            if (acertosDaFase.length === 0) return null

                            return (
                                <p>
                                    {acertosDaFase
                                        .map(x => {
                                            const obs = x.observacao?.trim()
                                            return `${x.tentativa}${obs ? `(${obs})` : ""}`
                                        })
                                        .join(", ")
                                    }
                                </p>
                            )
                        })()}

                    </div>

                </div>
            }
            close={() => setShowAlertAcerto(false)} modo='info' show={showalertacerto} />


        <Poup titulo={<p className="font-bold text-4xl">NOTIFICAÇÃO</p>}
         color="bg-red-700"
            descricao={
                <div className='w-96 flex   flex-col justify-start items-center max-h-96 h-fit pt-4'>
                    <p className='text-lg text-red-900 px-2 py-1 mb-2 rounded-md'> {equipe} atingiu {alerterro} erros na fase {fase + 1}!</p>

                    <div className='flex flex-col items-center w-80 mx-auto max-h-64 overflow-y-auto'>

                        {(() => {
                            const errosDaFase = arrayerro.filter(
                                x => x.fase === fase && x.equipe === equipe)

                            if (errosDaFase.length === 0) return null

                            return (
                                <p>
                                    {errosDaFase
                                        .map(x => {
                                            const obs = x.observacao?.trim()
                                            return `${x.tentativa}${obs ? `(${obs})` : ""}`
                                        })
                                        .join(", ")
                                    }
                                </p>
                            )
                        })()}

                    </div>

                </div>
            }
            close={() => setShowAlertErro(false)} modo='info' show={showalerterro} />



        <Poup titulo={`Relatório de Acertos`}
            descricao={
                <div className='w-96 flex flex-col justify-center items-center h-96 pt-4'>
                    <p className='text-lg'> {equipe} - Acertos Totais: {pt}</p>

                    <div className=' flex flex-col w-80 mx-auto overflow-y-scroll'>

                        {[...Array(frases.length).keys()].map(lvl => {
                            return (
                                <>
                                    <p key={lvl}> Fase {lvl + 1}:
                                        {arrayacerto.filter(x => x.fase === lvl && x.equipe === id).map(x => ` ${x.tentativa}${x.observacao?.trim() ? `(${x.observacao.trim()})` : ""}`)}
                                    </p>
                                </>
                            )
                        })}

                    </div>
                </div>
            }
            close={() => setShowAcerto(false)} modo='info' show={showacerto} />


        <Poup titulo={`Relatório de erros`}
            descricao={
                <div className='w-96 flex flex-col justify-center items-center h-96 pt-4'>
                    <p className='text-lg'> {equipe} - Erros Totais: {erro.length > 0 && erro.length}</p>

                    <div className=' flex flex-col w-80 mx-auto overflow-y-scroll'>

                        {[...Array(frases.length).keys()].map(lvl => {
                            return (
                                <>
                                    <p key={lvl}> Fase {lvl + 1}:
                                        {arrayerro.filter(x => x.fase === lvl && x.equipe === id).map(x => ` ${x.tentativa}${x.observacao?.trim() ? `(${x.observacao.trim()})` : ""},`)}
                                    </p>
                                </>
                            )
                        })}

                    </div>
                </div>
            }
            close={() => setShowErro(false)} modo='info' show={showerro} />


        <Poup titulo={`Configuração`} modo='info' close={() => setShowConfig(false)} show={showConfig}
            descricao={

                <div className={`flex flex-col items-center justify-center overflow-hidden transition-[max-height, opacity] duration-300 ease-in px-2 max-w-fit max-h-fit  opacity-100'
                        `}>


                    <p>Comportamento:</p>
                    <input type="range"
                        min="1"
                        max="5"
                        step="1"
                        onChange={(e) => setComport(Number(e.target.value))}
                        className={`cursor-pointer w-11/12 max-w-fit
                        ${comport === 1 ? "accent-red-700"
                                : comport === 2 ? "accent-orange-600"
                                    : comport === 3 ? "accent-gray-500"
                                        : comport === 4 ?
                                            "accent-green-500"
                                            : "accent-[green]"}`} />

                    <p
                        className={`
                        ${comport === 1 ? "text-red-800"
                                : comport === 2 ? "text-orange-800"
                                    : comport === 3 ? "text-gray-800"
                                        : comport === 4 ?
                                            "text-green-700"
                                            : "text-green-900"}`}>
                        {comport === 1 && "Muito ruim! -2pts"}
                        {comport === 2 && "Ruim -1pt"}
                        {comport === 3 && "Mediano"}
                        {comport === 4 && "Bom +1pt"}
                        {comport === 5 && "Muito Bom! +2pts"}
                    </p>

                    <hr className='border my-2 w-full' />

                    <p>Editar Campo </p>
                    <p className='text-sm text-center'>
                        Nome da Equipe:</p>
                    <input
                        onChange={(e) => { setName(e.target.value) }}
                        value={name}
                        type="text"
                        maxLength={12}
                        className='bg-[#e6eae1] block text-center text-sm sm:w-11/12 w-25' />





                    <div className='flex flex-row items-center justify-center py-1 gap-1'>

                        <div className='flex flex-row justify-center max-w-40 w-fit gap-1'>

                            <div className='w-fit'>
                                <p className='block text-sm'>Pts:</p>

                                <AiFillThunderbolt className='inline-block' />:

                            </div>


                            <div className='flex flex-col justify-center items-center gap-y-1 w-8'>



                                <input
                                    type="text"
                                    pattern='[0-9]'
                                    value={inputpb}

                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") setPt(inputpb)
                                    }}
                                    className='bg-[#e6eae1] block text-center text-sm max-w-full'
                                    maxLength={3}
                                    onChange={(e) => {
                                        const vinput = (e.target.value.replace(/\D/g, ""))

                                        if (vinput.length <= 3) setInputPB(Number(vinput))
                                    }} />

                                <input
                                    type="text"
                                    pattern='[0-9]'
                                    value={inputeb}
                                    onKeyDown={(e) => {

                                        if (e.key === "Enter") setStateE(inputeb)
                                    }}
                                    className='bg-[#e6eae1] text-sm max-w-full text-center'
                                    maxLength={2}
                                    onChange={(e) => {
                                        const vinput = (e.target.value.replace(/\D/g, ""))

                                        if (vinput.length <= 3) setInputEB(Number(vinput))
                                    }
                                    } />
                            </div>



                        </div>





                        <div className='flex flex-col gap-1'>

                            <button
                                onClick={() => setPt(inputpb)}
                                className={`${bgcolor} cursor-pointer hover:scale-110 transition-all duration-300 w-fit ${titlecolor} mx-auto text-[10px] rounded-md px-1  hover:bg--[var(--asecondary)]`}>
                                <HiCheck className='text-lg' />
                            </button>

                            <button
                                onClick={() => setStateE(inputeb)}
                                className={`${bgcolor} cursor-pointer hover:scale-110 transition-all duration-300 w-fit ${titlecolor} mx-auto text-[10px] rounded-md px-1 hover:bg--[var(--asecondary)]`}>
                                <HiCheck className='text-lg' />
                            </button>
                        </div>
                    </div>

                    <hr className='border my-1 w-full' />

                    <p>Observações:</p>
                    <textarea
                        value={observ}
                        onChange={(e) => setObserv(e.target.value)}
                        className={`text-sm ${observ.length > 0 ? 'bg-white border-2 border-black' : 'bg-[#e6eae1'}] 
                    sm:w-30 w-25 min-h-7 max-h-15 px-1 mb-2 text-gray-700`}
                    />



                </div>


            }

        />

        <div className={`max-h-dvh w-fit bg-white font-bold px-0 whitespace-nowrap flex flex-col items-center justify-center gap-y-2 mb-4 ${textcolor}`}>
            <p className={`${bgcolor} text-center w-full px-3 text-bold ${titlecolor}`}> {name} </p>

            <div className={`flex items-end ${comport > 3 ? 'text-green-800' : comport < 3 ? 'text-red-700' : textcolor}`}>

                <div className={`inline-block cursor-pointer hover:text-green-700`}
                    onClick={() => setShowAcerto(true)}>
                    <p className="inline-block text-5xl">
                        {totalpt}</p>

                    <p className='bottom-0 inline-block'>{totalpt == 1 || totalpt === 0 ? "Pt" : "Pts"}</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-fit'>
                <div>
                    <button onClick={() => setPt(ant => ant + 1)}
                        className='cursor-pointer bg-white px-2'>
                        <IoMdAddCircleOutline
                            className='cursor-pointer hover:bg-green-400 active:bg-green-400 transition duration-300 text-4xl rounded-full  p-0 flex items-center justify-center' /> </button>

                    <button onClick={() => setPt(ant => ant - 1)}
                    >
                        <IoMdRemoveCircleOutline className='cursor-pointer hover:bg-red-400 active:bg-red-400 transition duration-300 text-4xl rounded-full  p-0 flex items-center justify-center' /> </button>
                </div>


                <button className={`cursor-pointer hover:text-red-700`} onClick={() => setShowErro(true)}>
                    Erros : {arrayerro.filter(x => x.fase === fase && x.equipe === id).length}
                </button>


                {statee > 5 ?
                    <div className='flex justify-center items-center gap-1 bg-white '>
                        <p className='pl-2 text-sm flex items-center justify-center'>Energia: {statee}</p> <AiFillThunderbolt className='inline-block' />

                    </div>

                    :

                    <div className={`${statee < 5 ? `flex justify-center items-center` : "grid grid-cols-5 place-items-center justify-center w-fit"}`}>
                        {
                            [...Array(statee)].map(() => <AiFillThunderbolt className='inline-block' />)
                        }
                    </div>

                }

                <div className={`
                ${textcolor} hover:text-gray-700 cursor-pointer
                flex gap-1 px-3 py-1 items-center justify-center`}
                    onClick={() => setShowConfig(!showConfig)}>

                    <FaGear
                        className='cursor-pointer font-bold text-xl transition duration-300' />
                    Configurações
                </div>


            </div>

        </div>



    </>)
}