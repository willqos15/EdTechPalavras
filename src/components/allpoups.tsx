import { AiFillThunderbolt } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import Poup from '../components/poup';
import { GiPerspectiveDiceSixFacesFive } from "react-icons/gi";
import { MdChangeCircle } from "react-icons/md";
import { useState, useEffect } from 'react'
import Classes from "./classes";

type Aluno = {
    nome: string;
}


interface Fraseparams {
    palavra: string
    dica: string
    imagem?: string
    tema?: string
}

type objtentativa = {
    equipe: string;
    tentativa: string;
    fase: number;
    observacao?: string;
}

interface Poupprops {
    turma: Aluno[];
    setTurma: React.Dispatch<React.SetStateAction<Aluno[]>>
    poupacerto: boolean;
    poupdica: boolean;
    poupsword: boolean;
    poupduvidas: boolean;
    poupimg: boolean;
    poupsorteio: boolean;
    poupsobre: boolean;
    disabledica: boolean;
    pouperro: boolean,
    poupconfig: boolean,
    poupback: boolean,



    setPoupAcerto: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupDica: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSWord: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupDuvidas: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupImg: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSorteio: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupSobre: React.Dispatch<React.SetStateAction<boolean>>;
    setDisableDica: React.Dispatch<React.SetStateAction<boolean>>;
    setHelp: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupErro: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupConfig: React.Dispatch<React.SetStateAction<boolean>>;
    setPoupBack: React.Dispatch<React.SetStateAction<boolean>>;

    complete: number[];
    frases: Fraseparams[];
    fase: number;
    sorteio: string;
    sortear: () => void;
    erro: string[];
    nameb: string;
    namey: string;
    errob: string[]
    erroy: string[]


    setComplete: React.Dispatch<React.SetStateAction<number[]>>;
    setPtBlue: React.Dispatch<React.SetStateAction<number>>;
    setPtYellow: React.Dispatch<React.SetStateAction<number>>;
    setEnerB: React.Dispatch<React.SetStateAction<number>>;
    setEnerY: React.Dispatch<React.SetStateAction<number>>;
    setErroB: React.Dispatch<React.SetStateAction<string[]>>;
    setErroY: React.Dispatch<React.SetStateAction<string[]>>;
    setArrayErro: React.Dispatch<React.SetStateAction<objtentativa[]>>;
    setArrayAcerto: React.Dispatch<React.SetStateAction<objtentativa[]>>;
    setAlertErro: React.Dispatch<React.SetStateAction<number>>;
    setAlertAcerto: React.Dispatch<React.SetStateAction<number>>;
    setPage: React.Dispatch<React.SetStateAction<string>>;
}




export default function AllPoups({ poupacerto, setComplete, setPtBlue, setPtYellow, frases, fase, setPoupAcerto, poupdica,
    setPoupDica,
    setEnerB,
    setEnerY,
    setHelp,
    disabledica,
    setDisableDica,
    poupsword,
    setPoupSWord,
    complete,
    poupduvidas,
    setPoupDuvidas,
    poupimg,
    setPoupImg,
    poupsorteio,
    setPoupSorteio,
    sorteio,
    sortear,
    poupsobre: poupturma,
    setPoupSobre,
    erro,
    pouperro,
    setPoupErro,
    setErroB,
    setErroY,
    nameb,
    namey,
    setArrayErro,
    setArrayAcerto,
    turma,
    setTurma,
    poupconfig,
    setPoupConfig,
    setAlertErro,
    setAlertAcerto,
    setPoupBack,
    poupback,
    setPage


}: Poupprops) {


    const [mlista, setMLista] = useState<boolean>(false);

    const [observacao, setObservacao] = useState<string>("")

    useEffect(() => {
        if (turma.length > 0) {
            setMLista(true)
        }
        else { setMLista(false) }
    }, [turma])

    return (<>



    < Poup
            titulo={<> <p className='inline-block'> AVISO </p> </>}
            show={poupback}
            modo='confirma'
            qtdbtn={2}
            f1={() => {
                setPage("home")
                setPoupBack(false)
            }}
            f2={() => {
                setPoupBack(false)
            }}

            close={() => { setPoupBack(false) }}

            descricao={<>
                <p className='p-2 text-center'>Deseja voltar ao menu?</p></>}
        />


    

     < Poup
            titulo={< p className='inline-block ' > NOTIFICAÇÕES </p >}
            show={poupconfig} modo='info'
            close={() => setPoupConfig(false)}
            descricao={
                < div className='tduvida h-fit mt-2 overflow-y-auto px-2 py-2 flex flex-col gap-2 '>

                    <section className="flex justify-start">
                    <p className="whitespace-nowrap">Notificar Erro:</p>
                    <select className="bg-[#e6eae1] w-full" onChange={(e)=>setAlertErro(Number(e.target.value))}>
                        <option value="1">Desativado</option>
                        <option value="5">ao atingir 5 erros</option>
                        <option value="7">ao atingir 7 erros</option>
                        <option value="10">ao atingir 10 erros</option>
                        <option value="15">ao atingir 15 erros</option>
                        <option value="20">ao atingir 20 erros</option>
                        <option value="30">ao atingir 30 erros</option>
                    </select>
                    </section>

                    <section className="flex justify-start">
                     <p className="whitespace-nowrap">Notificar Acerto:</p>
                    <select className="bg-[#e6eae1] w-full" onChange={(e)=>setAlertAcerto(Number(e.target.value))}>
                        <option value="1">Desativado</option>
                        <option value="5">ao atingir 5 acertos</option>
                        <option value="7">ao atingir 7 acertos</option>
                        <option value="10">ao atingir 10 acertos</option>
                        <option value="15">ao atingir 15 acertos</option>
                        <option value="20">ao atingir 20 acertos</option>
                        <option value="30">ao atingir 30 acertos</option>
                    </select>
                    </section>

                </div >
            } />



        <Poup
            titulo={<p className='inline-block'>
                VOCÊ ERROU! </p>}
            show={pouperro}
            modo='time'
            qtdbtn={2}

            f1={() => {
                setErroB(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: nameb, tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            f2={() => {
                setErroY(ant => [...ant, `${erro[erro.length - 1]}`])
                setArrayErro(arr => [...arr, { equipe: namey, tentativa: erro[erro.length - 1], fase: fase, observacao: observacao }])
                setPoupErro(false)
                setObservacao("")
            }}

            close={() => {
                setPoupErro(false)
                setObservacao("")
            }}

            descricao={<div className="w-full flex flex-col justify-center items-center">
                <p className='w-50 px-2 text-center'>Quem errou a palavra?</p>


                <div className="flex items-center cursor-pointer" onClick={() => setMLista(!mlista)}>
                    {turma.length > 0 &&
                        <MdChangeCircle />
                    }
                    {mlista ? "Modo lista" : "Modo texto"}
                </div>

                {mlista && turma.length > 0 ?
                    <select value={observacao} onChange={(e) => setObservacao(e.target.value)}
                        className="bg-[#e6eae1] my-2">
                        <option value="">Nenhum</option>
                        {turma.map(x => <option value={x.nome} key={x.nome}>{x.nome}</option>)}
                    </select> : <>
                        <textarea className="max-h-96 min-h-10 w-11/12 bg-[#e6eae1] px-2"
                            placeholder="Digite o nome do aluno aqui"
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)} />
                    </>
                }


            </div >}
        />

        < Poup
            titulo={< p className='inline-block' >
                VOCÊ ACERTOU! </p >}
            show={poupacerto}
            modo='time'
            qtdbtn={2}

            f1={() => {
                setPtBlue(ant => ant + 1)
                setArrayAcerto(arr => [...arr, { equipe: nameb, tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}
            f2={() => {
                setPtYellow(ant => ant + 1)

                setArrayAcerto(arr => [...arr, { equipe: namey, tentativa: frases[fase].palavra, fase: fase, observacao: observacao }])
                setObservacao("")
                setPoupAcerto(false)

            }}

            close={() => { setPoupAcerto(false) }}

            descricao={< div className="w-full flex flex-col justify-center items-center" >
                <p className='px-2 text-center'> A palavra era {frases[fase].palavra}</p>
                <p className='w-50 px-2 text-center'>Quem acertou a palavra?</p>


                <div className="flex items-center cursor-pointer" onClick={() => setMLista(!mlista)}>
                    {turma.length > 0 &&
                        <MdChangeCircle />
                    }
                    {mlista && turma.length>0 ? "Modo lista" : !mlista && turma.length>0 ? "Modo texto" : ""}
                </div>

                {mlista && turma.length > 0 ?
                    <select value={observacao} onChange={(e) => setObservacao(e.target.value)}
                        className="bg-[#e6eae1] my-2">
                        <option value="">Nenhum</option>
                        {turma.map(x => <option value={x.nome} key={x.nome}>{x.nome}</option>)}
                    </select> : <>
                        <textarea className="max-h-96 min-h-10 w-11/12 bg-[#e6eae1] px-2"
                            placeholder="Digite o nome do aluno aqui"
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)} />
                    </>}


            </div >}
        />



        < Poup
            titulo={<><p className='inline-block'> Custa 1 de </p> <AiFillThunderbolt className='inline-block' /></>}
            show={poupdica}
            modo='time' qtdbtn={3}
            f1={() => {
                setEnerB(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)
            }}
            f2={() => {
                setEnerY(ant => ant - 1)
                setHelp(true)
                setPoupDica(false)
            }}
            f3={() => {
                setPoupDica(false)
                setHelp(true)
            }}

            close={() => { setPoupDica(false) }}

            descricao={<>
                <p className='p-2 text-center'>Informe qual equipe solicitou a dica</p></>} />


        < Poup
            titulo={<> <p className='inline-block'> AVISO </p> </>}
            show={disabledica}
            modo='confirma'
            qtdbtn={2}
            f1={() => {
                setHelp(false)
                setDisableDica(false)
            }}
            f2={() => {
                setDisableDica(false)
            }}

            close={() => { setDisableDica(false) }}

            descricao={<>
                <p className='p-2 text-center'>Deseja desativar a dica?</p></>}
        />


        < Poup
            titulo={< p className='inline-block' > AVISO </p >}
            show={poupsword} modo='confirma'
            qtdbtn={2}
            f1={() => {
                if (!complete.includes(fase)) {
                    setComplete(ant => [...ant, fase])
                    setPoupSWord(false)
                }
            }}
            f2={() => setPoupSWord(false)}
            close={() => setPoupSWord(false)}
            descricao={< p className='p-2 text-center' > Deseja revelar a palavra ?</p >}
        />

        < Poup
            titulo={< p className='inline-block ' > DÚVIDAS </p >}
            show={poupduvidas} modo='info'
            close={() => setPoupDuvidas(false)}
            descricao={
                < div className='tduvida h-96 mr-0 overflow-y-auto px-2 py-2'>

                    < div >
                        <h3>1 - Como a turma é organizada?</h3>
                        <p>A turma é dividida em duas equipes: Azul e Amarela.</p>
                    </div >

                    <div>
                        <h3>2 - Quem controla o jogo?</h3>
                        <p>Somente o professor controla a aplicação, exibindo o jogo em uma TV ou DataShow.</p>
                    </div>


                    <div>
                        <h3>3- Quem começa jogando?</h3>
                        <p>O professor pode definir manualmente a equipe inicial ou usar a aba "Sorteio".</p>
                    </div>

                    <div>
                        <h3>4 - Como funciona cada rodada?</h3>
                        <p>Um aluno da equipe escolhe uma letra por rodada.</p>
                        <p>O aluno só pode jogar novamente após todos de sua equipe participarem.</p>
                    </div>

                    <div>
                        <h3>5 - É permitido adivinhar a palavra inteira?</h3>
                        <p>Sim. O aluno pode tentar adivinhar a palavra completa a qualquer momento.</p>
                        <p>Se acertar, a equipe ganha o ponto imediatamente.</p>
                    </div>

                    <div>
                        <h3>6 - Existe ajuda durante a rodada?</h3>
                        <p>A equipe pode revelar uma dica da palavra com custo de 1 ponto de energia.</p>
                    </div>

                    <div>
                        <h3>7 - Como funciona a pontuação por comportamento?</h3>
                        <p>A equipe recebe Bônus ou Penalidade no placar total a depender do comportamento.</p>
                        <p>- Comportamento muito ruim: <strong>-2 pontos</strong></p>
                        <p>- Comportamento ruim: <strong>-1 ponto</strong></p>
                        <p>- Comportamento mediano: <strong>0 ponto</strong></p>
                        <p>- Comportamento bom: <strong>+1 ponto</strong></p>
                        <p>- Comportamento muito bom: <strong>+2 pontos</strong></p>
                    </div>

                    <div>
                        <h3>8 - Como se ganha o jogo?</h3>
                        <p>Ganha a equipe que somar mais pontos ao final, considerando acertos e comportamento.</p>
                    </div>

                    <div>
                        <h3>9 - As regras são fixas?</h3>
                        <p>Não. As regras podem ser adaptadas conforme a necessidade do professor.</p>
                    </div>

                    <span className='flex flex-col justify-center items-center px-2'>


                        
                        <span className='flex flex-col items-start text-sm linkct px-2 text-center'>

                            <a
                                href='https://canoatech.vercel.app/'> <FaGear className='inline-block' />   Desenvolvido por Canoa Tech:</a>

                            <span className='mx-auto text-base'>
                               
                                <a href='https://wa.me/5593991878598'> Contato: (93) 99187-8598 <IoLogoWhatsapp className='inline-block mr-1 ' /></a>
                            </span>



                        </span>

                    </span>

                </div >
            } />


        < Poup
            titulo={<> Imagem: {frases[fase].tema}</>}
            show={poupimg}
            modo='info'
            qtdbtn={2}

            close={() => { setPoupImg(false) }}

            descricao={<>
                <div className='sm:min-w-96 p-1'>
                    <img className='min-w-full' src={frases[fase].imagem}></img> </div></>}
        />

        < Poup
            titulo={<> SORTEAR </>}
            show={poupsorteio}
            modo='info'
            qtdbtn={2}

            close={() => { setPoupSorteio(false) }}

            descricao={<>
                <div className='flex flex-col justify-center items-center px-2 mt-2 min-w-40'>

                    <p>A equipe sorteada foi</p>
                    <p className='text-2xl'>{
                        sorteio === "load" ? "..." : sorteio

                    }</p>
                    <button onClick={sortear}
                        className='mt-3 cursor-pointer text-(--asecondary) hover:scale-90 transition-all duration-300 w-fit px-2 rounded-md text-4xl'
                    >
                        {sorteio === "load" ? <GiPerspectiveDiceSixFacesFive className='animate-spin' /> :
                            <MdChangeCircle />
                        }

                    </button>
                </div>
            </>}
        />


        < Poup

            titulo={< p className='inline-block ' > Turma </p >}
            show={poupturma} modo='info'
            close={() => setPoupSobre(false)}
            descricao={
                < div className='flex flex-col justify-center items-center px-2' >
                    <Classes turma={turma} setTurma={setTurma} />
                </div >

            } />

    </>)
}