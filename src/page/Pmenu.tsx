import { useState } from "react"
import PtQuiz from "./Pquiz"
import Poup from "../components/poup"
import { data } from "./data/data.ts"


export default function Pmenu() {


    const [route, setRoute] = useState<string>("home")
    const [page, setPage] = useState<string>("")
    const [team, setTeam] = useState<number>(0)

    const [showSelectTeam, setShowSelectTeam] = useState<boolean>(false)



    return (<div className="flex justify-center items-center h-dvh">

        <Poup show={showSelectTeam}
            close={() => setShowSelectTeam(!showSelectTeam)}
            titulo="Aviso" modo="info"
            descricao={<div className="flex flex-col gap-2 px-4 pt-2">

                <p>Escolha quantos times deseja: </p>

                <div className="flex gap-2">
                    <button
                        className="cursor-pointer bg-(--asecondary) w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"
                        onClick={() => {
                            setRoute(page)
                            setShowSelectTeam(false)
                            setTeam(2)
                        }}>2 Times</button>

                    <button
                        className="cursor-pointer bg-(--bsecondary) w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"
                        onClick={() => {
                            setRoute(page)
                            setShowSelectTeam(false)
                            setTeam(4)
                        }}>4 Times</button>

                </div>
            </div>} />

        <ul className={`${route !== "home" && "hidden"} flex flex-col justify-center items-center h-fit gap-10`}>
            <h2 className="text-5xl text-white text-shadow-2xl shadow-black">
                Conteúdo
            </h2>


            

                    {data.map((x, index) => (<li><a onClick={() => {
                setPage(String(index))
                setShowSelectTeam(true)
            }}
                className="bg-white p-2  m-4 text-2xl hover:bg-amber-200 rounded-xl cursor-pointer">

                {x.titulo}

            </a></li>) )}



            




        </ul>


        {data.map((x, index) =>
        (<div key={index}>

                {route== String(index) && 
                <PtQuiz team={team} setPage={setRoute} img={x.imghome}
                perguntas={x.frases} />}

        </div>


        ))}








    </div>)
}