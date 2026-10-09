import { FaArrowCircleRight, FaArrowCircleLeft, FaVolumeUp } from "react-icons/fa";
import { IoIosNotifications, IoIosSave, } from "react-icons/io";
import { FaLightbulb, FaQuestionCircle } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import {
    GiPerspectiveDiceSixFacesFive,
} from "react-icons/gi";
import { MdChangeCircle } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { IoArrowBackCircle, IoSend } from "react-icons/io5";
import CardTutorial from "../components/tutorial/Cardtutorial";
import Timer from "../components/tutorial/Timertutorial";

type Props = {
    img?: string;
};

export default function PQuizSkeleton({ img }: Props) {
    return (
        <>
            {/* =========================================================
                COMPONENTES EXTERNOS
                ========================================================= */}

            <div className="fixed bottom-4 right-6 group">

                <IoIosNotifications
                    className="
                          text-white
                          hover:text-amber-400
                          transition
                          duration-300
                          text-5xl
                          cursor-pointer
                        "
                /> </div>

            <div className="absolute m-4 top-0 right-0 group">

                <button
                    className={` text-white hover:text-amber-400 transition duration-300 text-5xl cursor-pointer`}
                >

                    <FaVolumeUp />

                </button>
            </div>


            {/* =========================================================
                ESTRUTURA PRINCIPAL
                ========================================================= */}

            <div className="flex flex-row justify-center items-center xl:h-screen">

                <div className="flex flex-row flex-wrap sm:gap-5 gap-y-3 gap-x-2 justify-center items-start mx-auto h-fit">


                    {/* =====================================================
                        COLUNA ESQUERDA
                        ===================================================== */}

                    <div className="xl:order-1 order-2">



                        <CardTutorial
                            equipe="Equipe Azul"
                            bgcolor='bg-[var(--aprimary)]'
                            titlecolor='text-white'
                            textcolor="text-[var(--asecondary)]"
                            name="Equipe Azul"
                            totalpt={15}
                            statee={4}
                            comport={4}
                            erros={2}
                        />


                    </div>


                    {/* =====================================================
                        ÁREA CENTRAL
                        ===================================================== */}

                    <div className="lg:order-2 order-1 flex flex-row justify-center items-center lg:w-fit w-full mb-0">

                        <div className="lg:w-fit w-full block mx-auto">

                            <div className="w-full">


                                {/* =================================================
                                    MENU SUPERIOR
                                    ================================================= */}

                                <div className="flex flex-row justify-start gap-2 items-end mx-auto">


                                    {/* VOLTAR */}

                                    <div
                                        className="flex items-center justify-center bg-(--bprimary) rounded-t-md text-(--bsecondary) px-2 pt-1"
                                    >
                                        <IoArrowBackCircle className="text-2xl" />

                                        <p className="text-xl sm:flex hidden">
                                            Voltar
                                        </p>
                                    </div>


                                    {/* DÚVIDAS */}

                                    <div
                                        className="h-8 bg-(--bprimary) px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1"
                                    >
                                        <FaQuestionCircle />

                                        <p className="sm:flex hidden">
                                            Dúvidas
                                        </p>
                                    </div>


                                    {/* SORTEAR */}

                                    <div
                                        className="h-8 bg-(--bprimary) px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1"
                                    >
                                        <GiPerspectiveDiceSixFacesFive />

                                        <p className="sm:flex hidden">
                                            Sortear
                                        </p>
                                    </div>


                                    {/* TURMA */}

                                    <div
                                        className="h-8 bg-(--bprimary) px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1"
                                    >
                                        <FaUserGroup />

                                        <p className="sm:flex hidden">
                                            Turma
                                        </p>
                                    </div>


                                    {/* SALVAR */}

                                    <div
                                        className="h-8 bg-(--bprimary) px-2 pt-1 rounded-t-md text-(--bsecondary) text-xl flex items-center gap-1"
                                    >
                                        <IoIosSave />

                                        <p className="sm:flex hidden">
                                            Salvar
                                        </p>
                                    </div>

                                </div>


                                {/* =================================================
                                    CABEÇALHO DA QUESTÃO
                                    ================================================= */}

                                <div className="sm:w-130 min-w-full text-(--bsecondary) bg-white h-fit mx-auto">

                                    <div className="text-3xl font-bold bg-(--bprimary) pl-5 pr-2 flex items-center h-12 justify-between w-full">

                                        <h1 className="inline-block text-color-(--bsecondary) py-2 sm:text-3xl text-2xl">
                                            01: Tema da questão
                                        </h1>

                                        <p className="inline-block bg-white sm:text-2xl text-xl rounded-md px-1">
                                            10 letras
                                        </p>

                                    </div>

                                </div>


                                {/* =================================================
                                    CORPO DO QUIZ
                                    ================================================= */}

                                <div className="bg-white relative">


                                    <Timer />

                                    <div className="h-14 flex items-center justify-center">
                                        {/* Timer aqui */}
                                    </div>


                                    {/* =================================================
                                        IMAGEM + NAVEGAÇÃO
                                        ================================================= */}

                                    <div className="flex justify-center gap-x-2 items-center h-fit">


                                        {/* SETA ESQUERDA */}

                                        <button
                                            className="bg-(--asecondary) text-white h-fit p-1 rounded-full sm:text-4xl text-2xl flex justify-center items-center font-bold"
                                        >
                                            <FaArrowCircleLeft />
                                        </button>


                                        {/* IMAGEM */}

                                        <div className="flex items-center w-32 h-32 p-2">

                                            {img ? (
                                                <img
                                                    className="w-auto mx-auto max-h-30 select-none rounded-xl"
                                                    src={img}
                                                    alt=""
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#e6eae1] rounded-xl" />
                                            )}

                                        </div>


                                        {/* SETA DIREITA */}

                                        <button
                                            className="bg-(--asecondary) text-white h-fit p-1 rounded-full sm:text-4xl text-2xl mr-1 flex justify-center items-center font-bold"
                                        >
                                            <FaArrowCircleRight />
                                        </button>

                                    </div>


                                    {/* =================================================
                                        PALAVRA
                                        ================================================= */}

                                    <div className="select-none flex sm:gap-2 gap-1 justify-center px-2">


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                P
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                A
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                L
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                A
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                V
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                R
                                            </span>
                                        </div>


                                        <div className="bg-[#e6eae1] text-(--asecondary) border-3 sm:w-8 sm:text-4xl sm:py-1 py-1 w-5 text-lg rounded-md text-center">
                                            <span className="opacity-0">
                                                A
                                            </span>
                                        </div>

                                    </div>


                                    {/* =================================================
                                        DICA + REVELAR PALAVRA
                                        ================================================= */}

                                    <div className="flex flex-row justify-center items-center gap-3">


                                        {/* DICA */}

                                        <button
                                            className="h-fit py-1 px-3 rounded-xl my-3 bg-(--asecondary) transition-all duration-300 w-fit max-w-96 flex flex-row items-center text-white"
                                        >

                                            <span className="flex flex-col justify-center items-center w-fit">

                                                <FaLightbulb className="text-xl" />

                                            </span>

                                            <span className="cursor-pointer wrap-normal text-center max-w-80 px-2">
                                                Dica desativada
                                            </span>

                                        </button>


                                        {/* REVELAR */}

                                        <button
                                            className="h-8 px-3 rounded-xl my-3 bg-(--asecondary) transition-all duration-300 w-fit flex flex-row items-center text-2xl text-white"
                                        >
                                            <IoMdEye />
                                        </button>

                                    </div>


                                    <hr className="border-2" />


                                    {/* =================================================
                                        ÁREA DE DIGITAÇÃO
                                        ================================================= */}

                                    <div className="flex items-center relative w-fit px-5 mx-auto">


                                        {/* ALTERAR MODO */}

                                        <button
                                            className="ml-4 px-2 h-fit flex flex-row items-center absolute sm:-left-20 -left-11"
                                        >

                                            <MdChangeCircle className="text-2xl text-(--asecondary)" />

                                            <p className="sm:flex hidden">
                                                Letra
                                            </p>

                                        </button>


                                        {/* INPUT */}

                                        <div className="flex gap-2 items-center">

                                            <input
                                                disabled
                                                autoComplete="off"
                                                maxLength={1}
                                                placeholder="Digite uma letra"
                                                className="uppercase my-3 sm:w-60 sm:text-xl text-base w-35 h-11 sm:px-3 px-1 rounded-sm border-3 bg-[#e6eae1]"
                                                type="text"
                                            />


                                            {/* ENVIAR */}

                                            <button
                                                disabled
                                                className="mx-0 h-fit absolute -right-2.5"
                                            >
                                                <IoSend className="text-2xl text-(--asecondary)" />
                                            </button>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        MENSAGEM DE VALIDAÇÃO
                                        ================================================= */}

                                    <p className="font-bold text-red-600 px-2 text-center">
                                    </p>


                                    {/* =================================================
                                        ERROS
                                        ================================================= */}

                                    <div className="flex justify-center text-center mt-0 m-3 px-3 w-11/12 pb-1 whitespace-nowrap">

                                        <p className="font-bold text-(--asecondary) text-center pr-2">
                                            Erros:
                                        </p>

                                        <div className="overflow-x-auto overflow-y-hidden y-20 max-w-96">

                                            <p className="font-bold text-red-600 px-2">

                                                <span className="flex gap-2">
                                                    A
                                                </span>

                                            </p>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =====================================================
                        COLUNA DIREITA
                        ===================================================== */}

                    <div className="lg:order-3 order-2">


                        <CardTutorial
                            equipe="Equipe Vermelha"
                              bgcolor='bg-[var(--cprimary)]'
                        titlecolor='text-white'
                        textcolor="text-[var(--csecondary)]"
                            name="Equipe Vermelha"
                            totalpt={15}
                            statee={4}
                            comport={4}
                            erros={2}
                        />

                    </div>


                </div>

            </div>
        </>
    );
}