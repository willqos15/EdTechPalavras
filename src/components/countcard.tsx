import { useEffect, useState } from 'react'
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiArrowUpWideLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiCheck } from "react-icons/hi";

interface propcard {
    equipe: string
    bgcolor: string
    titlecolor: string
    textcolor: string
    setStateE: (x: number) => void
    statee: number
}

export default function CountCard({ equipe, bgcolor, titlecolor, textcolor, statee, setStateE }: propcard) {


    const [inputeb, setInputEB] = useState<number>(0)
    const [inputpb, setInputPB] = useState<number>(0)
    const [showcb, setShowCB] = useState<boolean>(false)
    const [blue, setBlue] = useState<number>(0)

    const [nameb, setNameB] = useState<string>(equipe)
    const [comport, setComport] = useState<number>(3)
    const [totalpt, setTotalPt] = useState<number>(0)

    useEffect(() => {
        if (comport == 1)
            setTotalPt(blue - 2)
        if (comport == 2)
            setTotalPt(blue - 1)
        if (comport == 3)
            setTotalPt(blue)
        if (comport == 4)
            setTotalPt(blue + 1)
        if (comport == 5)
            setTotalPt(blue + 2)
    }, [comport, blue])


    return (<>

        <div className={`bg-white font-bold px-0 whitespace-nowrap flex flex-col h-fit  items-center justify-center gap-y-2 ${textcolor}`}>
            <p className={`${bgcolor} w-full px-3 text-bold ${titlecolor}`}> {nameb ? nameb : equipe} </p>

            <div className={`flex items-end ${comport > 3 ? 'text-green-800' : comport < 3 ? 'text-red-800' : textcolor}`}>

                <p className="inline-block text-5xl">
                    {totalpt}</p>

                <p className='inline-block'>{totalpt == 1 || totalpt === 0 ? "Pt" : "Pts"}</p>
            </div>

            <div>
                <button onClick={() => setBlue(ant => ant + 1)}
                    className='cursor-pointer bg-white px-2'>
                    <IoMdAddCircleOutline
                        className='cursor-pointer hover:bg-green-400 transition duration-300 text-4xl rounded-full  p-0 flex items-center justify-center' /> </button>

                <button onClick={() => setBlue(ant => ant - 1)}
                >
                    <IoMdRemoveCircleOutline className='cursor-pointer hover:bg-red-400 transition duration-300 text-4xl rounded-full  p-0 flex items-center justify-center' /> </button>

                {statee > 20 ?
                    <div className='flex justify-center items-center gap-1 bg-white '>
                        <p className='pl-2 text-sm flex items-center justify-center'>Energia: {statee}</p> <AiFillThunderbolt className='inline-block' />

                    </div>

                    :

                    <div className={`${statee < 5 ? `flex justify-center` : "grid grid-cols-5 place-items-center w-fit mx-auto"}`}>
                        {
                            [...Array(statee)].map(() => <AiFillThunderbolt className='inline-block' />)
                        }
                    </div>

                }

                {showcb ?
                    <RiArrowUpWideLine
                        onClick={() => setShowCB(!showcb)}
                        className='mx-auto font-bold text-4xl text-gray-400 hover:text-gray-600 transition duration-300' />
                    :
                    <RiArrowDownWideLine
                        onClick={() => setShowCB(!showcb)}
                        className='mx-auto font-bold text-4xl text-gray-400  hover:text-gray-600  transition duration-300' />
                }


                <div className={`overflow-hidden transition-[max-height, opacity] duration-300 ease-in
                        ${showcb ?
                        'max-h-96 max-w-35 px-2 opacity-100' :
                        'max-h-0  max-w-35 px-2 opacity-0 ease-out'}
                        `}>

                    <hr className='border mb-1' />

                    <p>Comportamento:</p>
                    <input type="range"
                        min="1"
                        max="5"
                        step="1"
                        onChange={(e) => setComport(Number(e.target.value))}
                        className={`
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

                    <hr className='border my-2' />

                    <p className='text-sm text-center'>
                        Nome da Equipe:</p>
                    <input
                        onChange={(e) => { setNameB(e.target.value) }}
                        value={nameb}
                        type="text"
                        maxLength={12}
                        className='bg-[#e6eae1] block text-center text-sm max-w-full' />





                    <div className='flex flex-row justify-center py-1'>

                        <div className='flex flex-row justify-center max-w-40 w-full'>

                            <div className='w-fit'>
                                <p className='block text-sm'>Pts:</p>

                                <AiFillThunderbolt className='inline-block' />:

                            </div>


                            <div className='flex flex-col justify-center items-center max-w-full gap-y-1 w-12 mx-auto'>



                                <input
                                    type="text"
                                    pattern='[0-9]'
                                    value={inputpb}

                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") setBlue(inputpb)
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
                                onClick={() => setBlue(inputpb)}
                                className={`${bgcolor} hover:scale-110 transition-all duration-300 w-fit ${titlecolor} mx-auto text-[10px] rounded-md px-1  hover:bg-blue-950`}>
                                <HiCheck className='text-lg' />
                            </button>

                            <button
                                onClick={() => setStateE(inputeb)}
                                className={`${bgcolor} hover:scale-110 transition-all duration-300 w-fit ${titlecolor} mx-auto text-[10px] rounded-md px-1 hover:bg-blue-950`}>
                                <HiCheck className='text-lg' />
                            </button>
                        </div>
                    </div>

                    <hr className='border my-1'/>

                    <p>Observações:</p>
                    <textarea className='bg-[#e6eae1] w-full min-h-6 px-1 text-md text-gray-700'>

                    </textarea>



                </div>

            </div>

        </div>



    </>)
}