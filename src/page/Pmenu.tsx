import { useState } from "react"
import PtQuiz from "./Pquiz"
import img from '../assets/PTG.webp'
import Poup from "../components/poup"



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
            <li><a onClick={() => {
                setPage("1")
                setShowSelectTeam(true)
            }}
                className="bg-white p-2  m-4 text-2xl hover:bg-amber-200 rounded-xl">Português - 6ºano</a></li>
            <li ><a onClick={() => {
                setPage("2")
                setShowSelectTeam(true)
            }} className="bg-white p-2 m-4 text-2xl hover:bg-amber-200 rounded-xl">Português - 7º Ano</a></li>
            <li><a onClick={() => {
                setPage("3")
                setShowSelectTeam(true)
            }} className="bg-white p-2 m-4 text-2xl hover:bg-amber-200 rounded-xl">Português - 8º Ano</a></li>
        </ul>




        {route === "1" && <PtQuiz team={team} setPage={setRoute} img={img} perguntas={[{ tema: "Português - 6ºano", palavra: "SUBSTANTIVO", dica: "Palavra que nomeia seres, objetos, lugares, sentimentos ou ideias." },

        { tema: "Português - 6ºano", palavra: "ADJETIVO", dica: "Palavra que caracteriza ou atribui qualidade ao substantivo." },

        { tema: "Português - 6ºano", palavra: "VERBO", dica: "Palavra que indica ação, estado ou fenômeno da natureza." },

        { tema: "Português - 6ºano", palavra: "INTERJEIÇÃO", dica: "Palavra que expressa emoção, sentimento ou reação imediata." },

        { tema: "Português - 6ºano", palavra: "PREPOSIÇÃO", dica: "Palavra que liga termos da oração, estabelecendo relação entre eles." },

        { tema: "Português - 6ºano", palavra: "CONJUNÇÃO", dica: "Palavra que conecta orações ou termos semelhantes." },

        { tema: "Português - 6ºano", palavra: "ADVÉRBIO", dica: "Palavra que modifica verbo, adjetivo ou outro advérbio, indicando circunstância." },

        { tema: "Português - 6ºano", palavra: "PRONOME", dica: "Palavra que substitui ou acompanha o substantivo, evitando repetição." },

        { tema: "Português - 6ºano", palavra: "ARTIGO", dica: "Palavra que antecede o substantivo, indicando definição ou indefinição." },

        { tema: "Português - 6ºano", palavra: "NUMERAL", dica: "Palavra que indica quantidade, ordem ou multiplicação." },

        { tema: "Português - 6ºano", palavra: "LOCUÇÃO", dica: "Conjunto de duas ou mais palavras com valor de uma só classe gramatical." },

        { tema: "Português - 6ºano", palavra: "SUJEITO", dica: "Termo da oração sobre o qual se declara algo." },

        { tema: "Português - 6ºano", palavra: "PREDICADO", dica: "Parte da oração que contém a informação sobre o sujeito." },

        { tema: "Português - 6ºano", palavra: "OBJETO", dica: "Termo que completa o sentido do verbo, podendo ser direto ou indireto." },

        { tema: "Português - 6ºano", palavra: "VOCATIVO", dica: "Termo usado para chamar ou interpelar alguém." },

        { tema: "Português - 6ºano", palavra: "PONTUAÇÃO", dica: "Conjunto de sinais gráficos que organizam e estruturam o texto." },

        { tema: "Português - 6ºano", palavra: "SINTAXE", dica: "Parte da gramática que estuda a organização das palavras na frase." }]} />}


        {route === "2" && <PtQuiz team={team} setPage={setRoute} img={img} perguntas={[

            { tema: "Português - 7ºano", palavra: "FALA COLOQUIAL", dica: "Forma de linguagem usada no dia a dia, mais informal e espontânea." },

            { tema: "Português - 7ºano", palavra: "FALA CULTA", dica: "Forma de linguagem que segue as normas gramaticais, usada em situações formais." },

            { tema: "Português - 7ºano", palavra: "DISSÍLABO", dica: "Palavra que possui duas sílabas." },

            { tema: "Português - 7ºano", palavra: "TRISSÍLABO", dica: "Palavra que possui três sílabas." },

            { tema: "Português - 7ºano", palavra: "POLISSÍLABO", dica: "Palavra que possui quatro ou mais sílabas." },

            { tema: "Português - 7ºano", palavra: "HIATO", dica: "Encontro de duas vogais em sílabas diferentes dentro da palavra." },

            { tema: "Português - 7ºano", palavra: "MONOSSÍLABO TÔNICO", dica: "Palavra de uma sílaba pronunciada com intensidade." },

            { tema: "Português - 7ºano", palavra: "MONOSSÍLABO ÁTONO", dica: "Palavra de uma sílaba pronunciada sem intensidade própria." },

            { tema: "Português - 7ºano", palavra: "OXÍTONA", dica: "Palavra cuja última sílaba é a mais forte." },

            { tema: "Português - 7ºano", palavra: "PAROXÍTONA", dica: "Palavra cuja penúltima sílaba é a mais forte." },

            { tema: "Português - 7ºano", palavra: "PROPAROXÍTONA", dica: "Palavra cuja antepenúltima sílaba é a mais forte." },

        ]} />}


        {route === "3" && <PtQuiz team={team} setPage={setRoute} img={img} perguntas={[
            { tema: "Português - 8ºano", palavra: "SUJEITO", dica: "Termo da oração sobre o qual se declara algo." },

            { tema: "Português - 8ºano", palavra: "SUJEITO SIMPLES", dica: "Apresenta apenas um núcleo.", imagem: "" },

            { tema: "Português - 8ºano", palavra: "SUJEITO COMPOSTO", dica: "Apresenta dois ou mais núcleos." },

            { tema: "Português - 8ºano", palavra: "SUJEITO OCULTO", dica: "Não aparece escrito, mas pode ser identificado pelo verbo." },

            { tema: "Português - 8ºano", palavra: "PREDICADO", dica: "Parte da oração que contém a informação sobre o sujeito." },

            { tema: "Português - 8ºano", palavra: "PREDICADO VERBAL", dica: "Indica ação e tem como núcleo um verbo significativo." },

            { tema: "Português - 8ºano", palavra: "PREDICADO NOMINAL", dica: "Indica estado ou característica, tendo como núcleo um nome." },

            { tema: "Português - 8ºano", palavra: "PREDICADO VERBO-NOMINAL", dica: "Apresenta dois núcleos: um verbo e um nome." },

            { tema: "Português - 8ºano", palavra: "ADVÉRBIOS", dica: "Palavras que indicam circunstâncias como tempo, modo, lugar ou intensidade." },

            { tema: "Português - 8ºano", palavra: "ONOMATOPEIA", dica: "Palavra que imita sons da natureza ou de objetos." },

            { tema: "Português - 8ºano", palavra: "EUFEMISMO", dica: "Figura de linguagem que suaviza uma ideia considerada desagradável." },

            { tema: "Português - 8ºano", palavra: "HIPÉRBOLE", dica: "Figura de linguagem que apresenta exagero intencional." },

        ]} />}


    </div>)
}