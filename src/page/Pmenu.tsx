import { useState } from "react";

import PtQuiz from "./Pquiz";
import Poup from "../components/poup";
import { client, data } from "./data/data.ts";
import PTutorial from "./Ptutorial.tsx";

import { AiFillBulb } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Pmenu() {
    const [route, setRoute] = useState<string>("home");
    const [page, setPage] = useState<string>("");
    const [team, setTeam] = useState<number>(0);
    const [showSelectTeam, setShowSelectTeam] = useState<boolean>(false);

    return (
        <div className="min-h-dvh flex flex-col overflow-hidden bg-gray-950">
            {route == "home" && <>
                <nav className="shrink-0 w-full bg-green-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between gap-4 z-50">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-shadow-4xl shadow-black whitespace-nowrap">
                        EdTech Palavras
                    </h2>

                    <a
                        href="https://wa.me/5593991878598?text=Olá!%20Tenho%20uma%20ideia%20de%20conteúdo%20e%20gostaria%20de%20encomendar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-green-800 px-3 sm:px-5 py-2 rounded-xl font-bold text-sm sm:text-base text-center transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        <FaWhatsapp className="text-2xl sm:text-3xl shrink-0" />

                        <span className="hidden sm:inline">
                            Encomende mais conteúdo.
                        </span>


                    </a>
                </nav>

                <main className="flex-1 flex flex-col justify-center items-center px-4 pb-10">

                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-shadow-4xl shadow-white mb-4">
                        CONTEÚDOS
                    </h2>

                    <ul className="flex flex-col gap-3 w-fit max-w-11/12 max-h-80 px-4 overflow-y-auto overflow-x-hidden">

                        <li>
                            <a
                                onClick={() => setRoute("tutorial")}
                                className="bg-white p-2 flex items-center justify-center gap-x-2 text-xl sm:text-2xl hover:bg-amber-200 rounded-xl cursor-pointer transition duration-300 hover:scale-[1.02]"
                            >
                                <AiFillBulb className="text-amber-600" />
                                Guia Rápido
                            </a>
                        </li>

                        {data.map((x, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => {
                                        setPage(String(index))
                                        setShowSelectTeam(true)
                                    }}
                                    className="bg-white p-3 flex items-center justify-center text-xl sm:text-2xl hover:bg-amber-200 rounded-xl cursor-pointer transition duration-300 hover:scale-[1.02]"
                                >
                                    {x.titulo}
                                </a>
                            </li>
                        ))}

                    </ul>

                </main>

                
            </>}

            <Poup
                show={showSelectTeam}
                close={() => setShowSelectTeam(!showSelectTeam)}
                titulo="Aviso"
                modo="info"
                descricao={
                    <div className="flex flex-col gap-2 px-4 pt-2">
                        <p>Escolha quantos times deseja:</p>

                        <div className="flex gap-2">
                            <button
                                className="cursor-pointer bg-(--asecondary) w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"
                                onClick={() => {
                                    setRoute(page)
                                    setShowSelectTeam(false)
                                    setTeam(2)
                                }}
                            >
                                2 Times
                            </button>

                            <button
                                className="cursor-pointer bg-(--bsecondary) w-fit text-white hover:scale-110 transition-all duration-300 mx-auto rounded-md px-3 py-1"
                                onClick={() => {
                                    setRoute(page)
                                    setShowSelectTeam(false)
                                    setTeam(4)
                                }}
                            >
                                4 Times
                            </button>
                        </div>
                    </div>
                }
            />

            {data.map((x, index) => (
                <div key={index}>
                    {route === String(index) && (
                        <PtQuiz
                            team={team}
                            setPage={setRoute}
                            img={x.imghome}
                            perguntas={x.frases}
                        />
                    )}
                </div>
            ))}

            {route === "tutorial" && (
                <PTutorial
                    img={data[0].imghome}
                    onFinish={() => setRoute("home")}
                />
            )}

            <footer className="fixed bottom-0 left-0 p-2 w-full text-center text-white bg-gray-950 text-xsm sm:text-sm flex gap-1 justify-center  font-medium">
                    Desenvolvido por{" "}
                    <a
                        href="https://canoatech.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-green-700 transition"
                    >
                        Canoa Tech 
                    </a>
                    <p>
                    e encomendado por {client}</p>
                </footer>

        </div>
    )
}