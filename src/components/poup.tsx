import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

type propmodo = "time" | "confirma"

interface Propriedades {
    titulo: ReactNode
descricao: ReactNode
show: boolean
modo: propmodo
f1: () => void
f2: () => void
f3?: () => void
close: ()=> void
}

export default function Poup({titulo, descricao, show, modo, f1, f2,f3, close}:Propriedades) {

    return (<>

    <div className={`${ show ? "bg-[rgba(0,0,0,0.8)] fixed flex items-center inset-0" : "hidden" } `}>

        <div className="bg-white max-w-60 mx-auto">

            <div className="flex items-center w-full bg-[#F7CD21] font-bold text-[#21285C] text-xl">
               <h1 className="w-full text-center">{titulo}</h1> 
               <IoClose
               onClick={close}
               className="mr-2 rounded-md font-bold text-white bg-red-600 transition-all duration-300 hover:scale-80"/> 
            </div>

            

            <p className="text-[#21285C] px-3 py-2">
            {descricao}</p>


           
            <div className="flex items-center justify-center py-2 px-2 gap-x-2">

                 {modo==="time"? 
                 <>

                <button onClick={f1}
                className="bg-[#21285C] hover:scale-110 transition-all duration-300 w-fit text-white mx-auto rounded-md px-3 py-1"> Blue</button>

                <button onClick={f2}
                className="bg-[#F7CD21] w-fit font-bold text-[#21285C]  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Yellow </button>

                <button onClick={f3}
                className="bg-[#2d5c21] w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Livre </button>

                </>

                : modo==="confirma" ? <>
                <button onClick={f1}
                className="bg-[#2d5c21] w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Sim </button>

                <button onClick={f2}
                className="bg-red-700 w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Não </button>
                </>: null}

            </div>
        </div>
        </div>

    </>)
}