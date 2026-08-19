import type { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

type propmodo = "time" | "confirma" | "info"
type propbtn = 4 | 5 

interface Propriedades {
    titulo: ReactNode
descricao: ReactNode
show: boolean
modo: propmodo
qtdbtn?: propbtn
team?: number
color?: string
f1?: () => void
f2?: () => void
f3?: () => void
f4?: () => void
f5?: () => void
close: ()=> void
}

export default function Poup({titulo, descricao, show, modo, f1, f2,f3,f4,f5, close, team, qtdbtn, color}:Propriedades) {

      if (!show) {
        return null;
    }

    return (<>

    <div className={`${ show ? "bg-[rgba(0,0,0,0.8)] fixed flex items-center inset-0 z-10" : "hidden" } `}>

        <div className={`max-w-96 mx-auto
             bg-white`}>

            <div className={`flex items-center w-full 
            ${color ? `${color} text-white`: `bg-(--bprimary) text-black `}
            font-bold text-xl relative`}
            >
               <h1 className="w-full text-center">{titulo}</h1> 
               <IoClose
               onClick={close}
               className="cursor-pointer absolute right-0 mr-2 rounded-md font-bold text-white bg-red-600 transition-all duration-300 hover:bg-red-800"/> 
            </div>

            

            <span className="text-(--asecondary)">
            {descricao}</span>


           
            <div className="flex items-center justify-center py-2 px-2 gap-x-2">

                 {modo==="time"? 
                 <>

                 {qtdbtn=== 4 ? <>

                <button onClick={f1}
                className="cursor-pointer bg-(--aprimary) hover:scale-110 transition-all duration-300 w-fit text-white mx-auto rounded-md px-3 py-1"> Azul</button>

                <button onClick={f2}
                className="cursor-pointer bg-(--bsecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Amarela </button>

                {team && team>2 && <>

                <button onClick={f3}
                className="cursor-pointer bg-(--csecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Vermelha </button>

                <button onClick={f4}
                className="cursor-pointer bg-(--dsecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Verde </button>

                </>}

                </> : qtdbtn===5 ?

                <>

                <button onClick={f1}
                className= "cursor-pointer bg-(--asecondary) hover:scale-110 transition-all duration-300 w-fit text-white mx-auto rounded-md px-3 py-1"> Azul</button>

                <button onClick={f2}
                className="cursor-pointer bg-(--bsecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Amarela </button>

                {team && team>2 && <>

                <button onClick={f3}
                className="cursor-pointer bg-(--csecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Vermelha </button>

                <button onClick={f4}
                className="cursor-pointer bg-(--dsecondary) w-fit font-bold text-white  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Verde </button>

                </>}

                <button onClick={f5}
                className="cursor-pointer bg-[#2d5c21] w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Livre </button>

                </>

                : null

                }

                </>

                : modo==="confirma" ? <>
                <button onClick={f1}
                className="cursor-pointer bg-[#2d5c21] w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Sim </button>

                <button onClick={f2}
                className="cursor-pointer bg-red-700 w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Não </button>
                </>: null}
                

            </div>

          
        </div>
        </div>

    </>)
}