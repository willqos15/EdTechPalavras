import { useState } from "react"
import Pprincipal from "./Pprincipal"


export default function Pmenu() {

   

    const [page, setPage] = useState<string>("home")
    return (<div className="flex justify-center items-center h-dvh">

        <ul className={`${page !== "home" && "hidden"} flex flex-col justify-center items-center h-fit gap-y-5`}>
            <h2 className="text-5xl text-white shadow-2xl shadow-black">Conteúdo</h2>

            <li><a onClick={() => setPage("1")} className="bg-white px-4 text-3xl hover:bg-amber-200 rounded-xl">Português - Sintaxe</a></li>
            <li ><a className="bg-white px-4 text-3xl hover:bg-amber-200 rounded-xl">Português - Gramática</a></li>
            <li><a className="bg-white px-4 text-3xl hover:bg-amber-200 rounded-xl">Português - Orações</a></li>
        </ul>



        
        {page === "1" && <Pprincipal />}

    </div>)
}