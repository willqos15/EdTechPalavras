import type { ReactNode } from "react";


interface Propriedades {
    titulo: string
descricao: ReactNode
modo: boolean
f1: () => void
f2: () => void
f3: () => void
}

export default function Poup({titulo, descricao, modo, f1, f2,f3}:Propriedades) {

    return (<>

    <div className={`${ modo ? "bg-[rgba(0,0,0,0.8)] fixed flex items-center inset-0" : "hidden" } `}>
        <div className="bg-white max-w-60 mx-auto">

            <h1 className="w-full bg-[#F7CD21] font-bold text-[#21285C] text-2xl">
                {titulo}
            </h1>

            <p className="text-[#21285C] px-3 py-2">
            {descricao}</p>

            <div className="flex items-center justify-center py-2 px-2 gap-x-2">

                <button onClick={f1}
                className="bg-[#21285C] hover:scale-110 transition-all duration-300 w-fit text-white mx-auto rounded-md px-3 py-1"> Blue</button>

                <button onClick={f2}
                className="bg-[#F7CD21] w-fit font-bold text-[#21285C]  hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Yellow </button>

                <button onClick={f3}
                className="bg-[#2d5c21] w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"> Livre </button>

            </div>
        </div>
        </div>

    </>)
}