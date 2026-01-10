import { AiFillThunderbolt } from "react-icons/ai";

export default function Poup() {

    return (<>
        <div className="bg-white max-w-60 mx-auto my-5">

            <h1 className="w-full bg-[#F7CD21] font-bold text-[#21285C] text-2xl">AVISO</h1>

            <p className="text-[#21285C] px-3 mt-2"> A dica da palavra custa 1 <AiFillThunderbolt className="inline-block"/>
            Informe qual equipe solicitou a dica.</p>

            <div className="flex items-center justify-center mx-2 h-10 gap-x-2">
                <button className="bg-[#21285C] w-fit text-white mx-auto rounded-xl px-3 "> Blue</button>

                <button className="bg-[#F7CD21] w-fit font-bold text-[#21285C]  mx-auto rounded-xl px-3 "> Yellow </button>

                <button className="bg-[#2d5c21] w-fit text-white mx-auto rounded-xl px-3 "> Livre </button>


            </div>
        </div>

    </>)
}