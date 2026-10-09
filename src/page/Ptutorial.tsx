"use client";

import {
    useCallback,
    useLayoutEffect,
    useEffect,
    useRef,
    useState,
} from "react";

import {
    FaArrowCircleRight,
    FaArrowCircleLeft,
    FaVolumeUp,
    FaCog,
    FaRedoAlt,
    FaPause,
    FaTimes,
} from "react-icons/fa";

import {
    IoIosNotifications,
    IoIosSave,
    IoMdEye,
} from "react-icons/io";

import {
    FaLightbulb,
    FaQuestionCircle,
} from "react-icons/fa";

import { FaUserGroup } from "react-icons/fa6";

import {
    GiPerspectiveDiceSixFacesFive,
} from "react-icons/gi";

import { MdChangeCircle } from "react-icons/md";

import {
    IoArrowBackCircle,
    IoSend,
} from "react-icons/io5";

import CardTutorial from "../components/tutorial/Cardtutorial";

type Props = {
    img?: string;
    onFinish?: () => void;
};

type Step = {
    target?: string;
    title: string;
    description: string;
    position?: "auto" | "top" | "bottom" | "left" | "right";
};

type TooltipPosition = {
    top: number;
    left: number;
};

type HighlightPosition = {
    top: number;
    left: number;
    width: number;
    height: number;
};

export default function PTutorial({
    img,
    onFinish = () => { },
}: Props) {

    /*
    |--------------------------------------------------------------------------
    | PASSOS DO TUTORIAL
    |--------------------------------------------------------------------------
    */

    const steps: Step[] = [
        {
            title: "Bem-vindo ao jogo!",
            description:
                "O EdTech Palavras é um aplicativo para dinâmicas em sala de aula, com divisão de equipes e gamificação.",
        },

        {
            // target: "#tutorial-equipes",
            title: "Prepare a sala",
            description:
                "O gestor da partida deve espelhar a tela em uma TV ou projetor e dividir a turma em 2 ou 4 equipes.",
            position: "top",
        },

        {
            target: "#tutorial-sortear",
            title: "Iniciando a partida",
            description:
                "Utilize a opção Sortear para decidir qual equipe começa a partida.",
            position: "bottom",
        },

        {
            target: "#tutorial-equipe-card",
            title: "Acompanhe cada equipe",
            description:
                "Os cartões laterais mostram a pontuação, a energia e os erros de cada equipe.",
            position: "top",
        },

        {
            target: "#tutorial-header",
            title: "Cabeçalho da questão",
            description:
                "Aqui você acompanha o número da questão, o tema e a quantidade de letras da palavra.",
            position: "bottom",
        },

        {
            target: "#tutorial-timer",
            title: "Controle o tempo",
            description:
                "O timer mostra o tempo disponível para a equipe responder. Ele pode ser iniciado, pausado e reiniciado.",
            position: "bottom",
        },

        {
            target: "#tutorial-timer-config",
            title: "Configure o timer",
            description:
                "Clique na engrenagem para configurar minutos e segundos. Também é possível desativar o timer.",
            position: "bottom",
        },

        {
            target: "#tutorial-imagem",
            title: "Imagem e navegação",
            description:
                "Aqui são exibidas imagens relacionadas ao tema. Use as setas para navegar entre as questões.",
            position: "top",
        },

        {
            target: "#tutorial-palavra",
            title: "Descubra a palavra",
            description:
                "A palavra aparece escondida por letras. A equipe deve tentar descobrir a resposta.",
            position: "top",
        },

        {
            target: "#tutorial-input",
            title: "Digite uma letra",
            description:
                "No modo Letra, a equipe pode digitar uma letra por vez para tentar descobrir a palavra.",
            position: "top",
        },

        {
            target: "#tutorial-enviar",
            title: "Envie a tentativa",
            description:
                "Depois de digitar a letra, utilize o botão de envio para registrar a tentativa.",
            position: "top",
        },

        {
            target: "#tutorial-modo",
            title: "Altere o modo de resposta",
            description:
                "Utilize este botão para alternar entre os modos Letra e Palavra.",
            position: "top",
        },

        {
            target: "#tutorial-input",
            title: "Digite uma palavra inteira",
            description:
                "No modo Palavra, a equipe pode digitar a resposta completa e enviá-la. Depois, é possível voltar ao modo Letra.",
            position: "top",
        },

        {
            target: "#tutorial-dica",
            title: "Use uma dica",
            description:
                "Se a equipe estiver com dificuldade, utilize a dica. Ela possui um custo de energia.",
            position: "bottom",
        },

        {
            target: "#tutorial-revelar",
            title: "Revele a resposta",
            description:
                "O botão de olho permite revelar a palavra caso nenhuma equipe saiba a resposta.",
            position: "bottom",
        },

        {
            target: "#tutorial-erros",
            title: "Acompanhe os erros",
            description:
                "As letras ou palavras erradas ficam registradas nesta área para que a turma possa acompanhar as tentativas.",
            position: "top",
        },

        {
            target: "#tutorial-passar",
            title: "Volte para outros assuntos",
            description:
                "Use este botão para sair da questão atual e voltar à lista de assuntos disponíveis.",
            position: "top",
        },

        {
            target: "#tutorial-turma",
            title: "Gerencie suas turmas",
            description:
                "Na opção Turma, você pode importar uma turma utilizando um arquivo Excel.",
            position: "bottom",
        },

        {
            target: "#tutorial-salvar",
            title: "Salve a atividade",
            description:
                "Ao finalizar, utilize Salvar para gerar um relatório com os resultados, as equipes e as observações.",
            position: "bottom",
        },

        {
            target: "#tutorial-som",
            title: "Controle o som",
            description:
                "Este botão permite controlar a narração e os sons da aplicação. Você pode ativá-los ou desativá-los conforme a necessidade.",
            position: "left",
        },

        {
            target: "#tutorial-notificacao",
            title: "Notificações",
            description:
                "As notificações podem ser ativadas para informar quando uma equipe atingir determinado número de acertos ou erros.",
            position: "top",
        },

        {
            title: "Tutorial concluído!",
            description:
                "Agora você conhece as principais ferramentas do jogo. Divida a turma, apresente as questões e deixe os alunos descobrirem as palavras!",
        },
    ];

    /*
    |--------------------------------------------------------------------------
    | ESTADOS
    |--------------------------------------------------------------------------
    */

    const [currentStep, setCurrentStep] = useState(0);

    const [tooltipPosition, setTooltipPosition] =
        useState<TooltipPosition>({
            top: 0,
            left: 0,
        });

    const [tooltipReady, setTooltipReady] =
        useState(false);

    const [highlightPosition, setHighlightPosition] =
        useState<HighlightPosition | null>(null);

    const tooltipRef =
        useRef<HTMLDivElement | null>(null);

    const isLastStep =
        currentStep === steps.length - 1;

    /*
    |--------------------------------------------------------------------------
    | CONFIGURAÇÕES
    |--------------------------------------------------------------------------
    */

    const TOOLTIP_WIDTH = 360;
    const SCREEN_MARGIN = 16;
    const GAP = 18;

    /*
    |--------------------------------------------------------------------------
    | ELEMENTO ALVO
    |--------------------------------------------------------------------------
    */

    const getTargetElement = useCallback(() => {

        const target =
            steps[currentStep]?.target;

        if (!target) {
            return null;
        }

        return document.querySelector(
            target
        ) as HTMLElement | null;

    }, [currentStep]);

    /*
    |--------------------------------------------------------------------------
    | SCROLL PARA O ELEMENTO
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const element =
            getTargetElement();

        if (!element) {
            return;
        }

        element.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });

    }, [getTargetElement]);

    /*
    |--------------------------------------------------------------------------
    | ATUALIZAR POSIÇÃO DO DESTAQUE
    |--------------------------------------------------------------------------
    */

    const updateHighlight = useCallback(() => {

        const element =
            getTargetElement();

        if (!element) {

            setHighlightPosition(null);

            return;
        }

        const rect =
            element.getBoundingClientRect();

        setHighlightPosition({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });

    }, [getTargetElement]);

    /*
    |--------------------------------------------------------------------------
    | ATUALIZAR APÓS RENDERIZAÇÃO
    |--------------------------------------------------------------------------
    */

    useLayoutEffect(() => {

        updateHighlight();

        const frame =
            requestAnimationFrame(() => {
                updateHighlight();
            });

        return () => {
            cancelAnimationFrame(frame);
        };

    }, [
        currentStep,
        updateHighlight,
    ]);

    /*
    |--------------------------------------------------------------------------
    | POSICIONAMENTO DO TOOLTIP
    |--------------------------------------------------------------------------
    */

    const calculateTooltipPosition =
        useCallback(() => {

            const element =
                getTargetElement();

            const tooltip =
                tooltipRef.current;

            /*
            |--------------------------------------------------------------------------
            | SEM ELEMENTO
            |--------------------------------------------------------------------------
            */

            if (!element || !tooltip) {

                const width =
                    tooltip?.offsetWidth ||
                    TOOLTIP_WIDTH;

                const height =
                    tooltip?.offsetHeight ||
                    200;

                setTooltipPosition({
                    top:
                        Math.max(
                            SCREEN_MARGIN,
                            (
                                window.innerHeight -
                                height
                            ) / 2
                        ),

                    left:
                        Math.max(
                            SCREEN_MARGIN,
                            (
                                window.innerWidth -
                                width
                            ) / 2
                        ),
                });

                setTooltipReady(true);

                return;
            }

            /*
            |--------------------------------------------------------------------------
            | DIMENSÕES
            |--------------------------------------------------------------------------
            */

            const targetRect =
                element.getBoundingClientRect();

            const tooltipWidth =
                tooltip.offsetWidth ||
                TOOLTIP_WIDTH;

            const tooltipHeight =
                tooltip.offsetHeight ||
                200;

            const viewportWidth =
                window.innerWidth;

            const viewportHeight =
                window.innerHeight;

            const targetTop =
                targetRect.top;

            const targetBottom =
                targetRect.bottom;

            const targetLeft =
                targetRect.left;

            const targetRight =
                targetRect.right;

            /*
            |--------------------------------------------------------------------------
            | VERIFICAR SE CABE
            |--------------------------------------------------------------------------
            */

            const fits = (
                top: number,
                left: number
            ) => {

                return (
                    top >= SCREEN_MARGIN &&
                    left >= SCREEN_MARGIN &&
                    top + tooltipHeight <=
                    viewportHeight - SCREEN_MARGIN &&
                    left + tooltipWidth <=
                    viewportWidth - SCREEN_MARGIN
                );
            };

            /*
            |--------------------------------------------------------------------------
            | LIMITAR HORIZONTAL
            |--------------------------------------------------------------------------
            */

            const clampHorizontal = (
                left: number
            ) => {

                return Math.min(
                    Math.max(
                        SCREEN_MARGIN,
                        left
                    ),
                    Math.max(
                        SCREEN_MARGIN,
                        viewportWidth -
                        tooltipWidth -
                        SCREEN_MARGIN
                    )
                );
            };

            /*
            |--------------------------------------------------------------------------
            | CANDIDATOS
            |--------------------------------------------------------------------------
            */

            const candidates = [

                {
                    name: "top",

                    top:
                        targetTop -
                        tooltipHeight -
                        GAP,

                    left:
                        clampHorizontal(
                            targetLeft +
                            targetRect.width / 2 -
                            tooltipWidth / 2
                        ),
                },

                {
                    name: "bottom",

                    top:
                        targetBottom +
                        GAP,

                    left:
                        clampHorizontal(
                            targetLeft +
                            targetRect.width / 2 -
                            tooltipWidth / 2
                        ),
                },

                {
                    name: "right",

                    top:
                        Math.min(
                            Math.max(
                                SCREEN_MARGIN,
                                targetTop +
                                targetRect.height / 2 -
                                tooltipHeight / 2
                            ),
                            viewportHeight -
                            tooltipHeight -
                            SCREEN_MARGIN
                        ),

                    left:
                        targetRight +
                        GAP,
                },

                {
                    name: "left",

                    top:
                        Math.min(
                            Math.max(
                                SCREEN_MARGIN,
                                targetTop +
                                targetRect.height / 2 -
                                tooltipHeight / 2
                            ),
                            viewportHeight -
                            tooltipHeight -
                            SCREEN_MARGIN
                        ),

                    left:
                        targetLeft -
                        tooltipWidth -
                        GAP,
                },
            ];

            /*
            |--------------------------------------------------------------------------
            | POSIÇÃO PREFERENCIAL
            |--------------------------------------------------------------------------
            */

            const preferred =
                steps[currentStep]?.position;

            if (
                preferred &&
                preferred !== "auto"
            ) {

                const preferredCandidate =
                    candidates.find(
                        candidate =>
                            candidate.name ===
                            preferred
                    );

                if (
                    preferredCandidate &&
                    fits(
                        preferredCandidate.top,
                        preferredCandidate.left
                    )
                ) {

                    setTooltipPosition({
                        top:
                            preferredCandidate.top,

                        left:
                            preferredCandidate.left,
                    });

                    setTooltipReady(true);

                    return;
                }
            }

            /*
            |--------------------------------------------------------------------------
            | QUALQUER POSIÇÃO QUE CAIBA
            |--------------------------------------------------------------------------
            */

            const perfectCandidate =
                candidates.find(
                    candidate =>
                        fits(
                            candidate.top,
                            candidate.left
                        )
                );

            if (perfectCandidate) {

                setTooltipPosition({
                    top:
                        perfectCandidate.top,

                    left:
                        perfectCandidate.left,
                });

                setTooltipReady(true);

                return;
            }

            /*
            |--------------------------------------------------------------------------
            | ESCOLHER A MENOS RUIM
            |--------------------------------------------------------------------------
            */

            const calculatePenalty = (
                candidate: {
                    top: number;
                    left: number;
                }
            ) => {

                let penalty = 0;

                if (
                    candidate.top <
                    SCREEN_MARGIN
                ) {

                    penalty +=
                        SCREEN_MARGIN -
                        candidate.top;
                }

                if (
                    candidate.left <
                    SCREEN_MARGIN
                ) {

                    penalty +=
                        SCREEN_MARGIN -
                        candidate.left;
                }

                if (
                    candidate.top +
                    tooltipHeight >
                    viewportHeight -
                    SCREEN_MARGIN
                ) {

                    penalty +=
                        candidate.top +
                        tooltipHeight -
                        (
                            viewportHeight -
                            SCREEN_MARGIN
                        );
                }

                if (
                    candidate.left +
                    tooltipWidth >
                    viewportWidth -
                    SCREEN_MARGIN
                ) {

                    penalty +=
                        candidate.left +
                        tooltipWidth -
                        (
                            viewportWidth -
                            SCREEN_MARGIN
                        );
                }

                return penalty;
            };

            const bestCandidate =
                [...candidates].sort(
                    (a, b) =>
                        calculatePenalty(a) -
                        calculatePenalty(b)
                )[0];

            /*
            |--------------------------------------------------------------------------
            | POSIÇÃO FINAL
            |--------------------------------------------------------------------------
            */

            setTooltipPosition({
                top:
                    Math.max(
                        SCREEN_MARGIN,
                        Math.min(
                            bestCandidate.top,
                            viewportHeight -
                            tooltipHeight -
                            SCREEN_MARGIN
                        )
                    ),

                left:
                    Math.max(
                        SCREEN_MARGIN,
                        Math.min(
                            bestCandidate.left,
                            viewportWidth -
                            tooltipWidth -
                            SCREEN_MARGIN
                        )
                    ),
            });

            setTooltipReady(true);

        }, [
            currentStep,
            getTargetElement,
        ]);

    /*
    |--------------------------------------------------------------------------
    | RECALCULAR TOOLTIP
    |--------------------------------------------------------------------------
    */

    useLayoutEffect(() => {

        setTooltipReady(false);

        const frame =
            requestAnimationFrame(() => {
                calculateTooltipPosition();
            });

        return () =>
            cancelAnimationFrame(frame);

    }, [
        currentStep,
        calculateTooltipPosition,
    ]);

    /*
    |--------------------------------------------------------------------------
    | SCROLL / RESIZE
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const handlePositionChange = () => {

            updateHighlight();
            calculateTooltipPosition();

        };

        window.addEventListener(
            "resize",
            handlePositionChange
        );

        window.addEventListener(
            "scroll",
            handlePositionChange,
            true
        );

        return () => {

            window.removeEventListener(
                "resize",
                handlePositionChange
            );

            window.removeEventListener(
                "scroll",
                handlePositionChange,
                true
            );

        };

    }, [
        updateHighlight,
        calculateTooltipPosition,
    ]);

    /*
    |--------------------------------------------------------------------------
    | PRÓXIMO
    |--------------------------------------------------------------------------
    */

    function nextStep() {

        if (isLastStep) {
            onFinish();
            return;
        }

        setCurrentStep(
            current =>
                Math.min(
                    current + 1,
                    steps.length - 1
                )
        );
    }

    /*
    |--------------------------------------------------------------------------
    | ANTERIOR
    |--------------------------------------------------------------------------
    */

    function previousStep() {

        setCurrentStep(
            current =>
                Math.max(
                    current - 1,
                    0
                )
        );
    }

    /*
    |--------------------------------------------------------------------------
    | FRONT
    |--------------------------------------------------------------------------
    */

    return (
        <>
            <style>{`

                /*
                =========================================================
                OVERLAY
                =========================================================
                */

                .tutorial-overlay {
                    position: fixed;
                    inset: 0;

                    background: rgba(0, 0, 0, 0.65);

                    z-index: 10000;

                    pointer-events: none;
                }


                /*
                =========================================================
                ÁREAS DO OVERLAY
                =========================================================

                Em vez de colocar um elemento por cima do alvo,
                dividimos o overlay em quatro partes.

                O centro fica completamente livre.

                Isso permite enxergar o elemento original
                sem alterar seu z-index.
                */

                .tutorial-overlay-area {
                    position: fixed;

                    background: rgba(0, 0, 0, 0.65);

                    z-index: 10000;

                    pointer-events: none;
                }


                /*
                =========================================================
                DESTAQUE
                =========================================================
                */

                .tutorial-highlight-fixed {
                    position: fixed;

                    z-index: 10001;

                    pointer-events: none;

                    border-radius: 8px;

                    box-shadow:
                        0 0 0 4px white,
                        0 0 0 8px var(--aprimary),
                        0 0 25px rgba(0, 0, 0, 0.35);

                    transition:
                        top 0.2s ease,
                        left 0.2s ease,
                        width 0.2s ease,
                        height 0.2s ease;
                }


                /*
                =========================================================
                TOOLTIP
                =========================================================
                */

                .tutorial-tooltip {
                    position: fixed;

                    z-index: 10002;

                    width: min(
                        360px,
                        calc(100vw - 32px)
                    );

                    max-height:
                        calc(100vh - 32px);

                    overflow-y: auto;

                    box-sizing: border-box;

                    transition:
                        top 0.25s ease,
                        left 0.25s ease,
                        opacity 0.2s ease,
                        transform 0.2s ease;
                }

            `}</style>


            {/*
            |--------------------------------------------------------------------------
            | OVERLAY COMPLETO
            |--------------------------------------------------------------------------
            */}

            {!highlightPosition && (
                <div className="tutorial-overlay" />
            )}


            {/*
            |--------------------------------------------------------------------------
            | OVERLAY COM BURACO
            |--------------------------------------------------------------------------
            */}

            {highlightPosition && (
                <>
                    {/* TOP */}

                    <div
                        className="tutorial-overlay-area"
                        style={{
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height:
                                Math.max(
                                    0,
                                    highlightPosition.top
                                ),
                        }}
                    />


                    {/* BOTTOM */}

                    <div
                        className="tutorial-overlay-area"
                        style={{
                            top:
                                highlightPosition.top +
                                highlightPosition.height,

                            left: 0,

                            width: "100vw",

                            height:
                                Math.max(
                                    0,
                                    window.innerHeight -
                                    (
                                        highlightPosition.top +
                                        highlightPosition.height
                                    )
                                ),
                        }}
                    />


                    {/* LEFT */}

                    <div
                        className="tutorial-overlay-area"
                        style={{
                            top:
                                highlightPosition.top,

                            left: 0,

                            width:
                                Math.max(
                                    0,
                                    highlightPosition.left
                                ),

                            height:
                                highlightPosition.height,
                        }}
                    />


                    {/* RIGHT */}

                    <div
                        className="tutorial-overlay-area"
                        style={{
                            top:
                                highlightPosition.top,

                            left:
                                highlightPosition.left +
                                highlightPosition.width,

                            width:
                                Math.max(
                                    0,
                                    window.innerWidth -
                                    (
                                        highlightPosition.left +
                                        highlightPosition.width
                                    )
                                ),

                            height:
                                highlightPosition.height,
                        }}
                    />
                </>
            )}


            {/*
            |--------------------------------------------------------------------------
            | DESTAQUE
            |--------------------------------------------------------------------------
            */}

            {highlightPosition && (
                <div
                    className="tutorial-highlight-fixed"
                    style={{
                        top:
                            highlightPosition.top,

                        left:
                            highlightPosition.left,

                        width:
                            highlightPosition.width,

                        height:
                            highlightPosition.height,
                    }}
                />
            )}


            {/*
            |--------------------------------------------------------------------------
            | TOOLTIP
            |--------------------------------------------------------------------------
            */}

            <div
                ref={tooltipRef}
                className="
                    tutorial-tooltip
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    border-2
                    border-(--aprimary)
                    p-5
                "
                style={{

                    top:
                        tooltipReady
                            ? tooltipPosition.top
                            : "50%",

                    left:
                        tooltipReady
                            ? tooltipPosition.left
                            : "50%",

                    opacity:
                        tooltipReady
                            ? 1
                            : 0,

                    transform:
                        tooltipReady
                            ? "translate(0, 0)"
                            : "translate(-50%, -50%)",

                }}
            >

                <div className="
                    flex
                    items-center
                    justify-between
                    mb-3
                ">

                    <span className="
                        text-xs
                        font-bold
                        text-gray-400
                    ">

                        PASSO {currentStep + 1} DE {steps.length}

                    </span>

                    <button
                        type="button"
                        onClick={onFinish}
                        className="text-gray-400 hover:text-red-500 text-xl transition cursor-pointer"
                        title="Sair do tutorial"
                    >
                        <FaTimes />
                    </button>

                </div>


                <h2 className="
                    text-xl
                    font-bold
                    text-(--asecondary)
                    mb-2
                ">

                    {steps[currentStep].title}

                </h2>


                <p className="
                    text-gray-700
                    text-sm
                    leading-relaxed
                ">

                    {steps[currentStep].description}

                </p>


                <div className="
                    flex
                    items-center
                    justify-between
                    mt-5
                    gap-3
                ">

                    <button
                        type="button"
                        onClick={previousStep}
                        disabled={currentStep === 0}
                        className="
                            flex
                            items-center
                            gap-1
                            px-3
                            py-2
                            rounded-lg
                            text-gray-600
                            font-semibold
                            transition
                            hover:bg-gray-100
                            disabled:opacity-30
                            disabled:cursor-not-allowed
                        "
                    >

                        <FaArrowCircleLeft />

                        Voltar

                    </button>


                    <button
                        type="button"
                        onClick={nextStep}
                        className="
                            flex
                            items-center
                            gap-2
                            px-5
                            py-2
                            rounded-lg
                            bg-(--aprimary)
                            text-white
                            font-bold
                            transition
                            hover:opacity-90
                            hover:scale-105
                            active:scale-95
                        "
                    >

                        {isLastStep
                            ? "Finalizar"
                            : "Próximo"
                        }

                        {!isLastStep && (
                            <FaArrowCircleRight />
                        )}

                    </button>

                </div>

            </div>


            {/*
            |--------------------------------------------------------------------------
            | NOTIFICAÇÃO
            |--------------------------------------------------------------------------
            */}

            <div
                id="tutorial-notificacao"
                className="
                    fixed
                    bottom-4
                    right-6
                "
            >

                <IoIosNotifications
                    className="
                        text-white
                        hover:text-amber-400
                        transition
                        duration-300
                        text-5xl
                        cursor-pointer
                    "
                />

            </div>


            {/*
            |--------------------------------------------------------------------------
            | SOM
            |--------------------------------------------------------------------------
            */}

            <div
                id="tutorial-som"
                className="
                    absolute
                    m-4
                    top-0
                    right-0
                "
            >

                <button
                    className="
                        text-white
                        hover:text-amber-400
                        transition
                        duration-300
                        text-5xl
                        cursor-pointer
                    "
                >

                    <FaVolumeUp />

                </button>

            </div>


            {/*
            |--------------------------------------------------------------------------
            | ESTRUTURA PRINCIPAL
            |--------------------------------------------------------------------------
            */}

            <div className="
                flex
                flex-row
                justify-center
                items-center
                xl:h-screen
            ">

                <div className="
                    flex
                    flex-row
                    flex-wrap
                    sm:gap-5
                    gap-y-3
                    gap-x-2
                    justify-center
                    items-start
                    mx-auto
                    h-fit
                ">


                    {/*
                    =====================================================
                    EQUIPE ESQUERDA
                    =====================================================
                    */}

                    <div
                        id="tutorial-equipe-card"
                        className="
                            xl:order-1
                            order-2
                        "
                    >

                        <CardTutorial
                            equipe="Equipe Azul"
                            bgcolor="bg-[var(--aprimary)]"
                            titlecolor="text-white"
                            textcolor="text-[var(--asecondary)]"
                            name="Equipe Azul"
                            totalpt={15}
                            statee={4}
                            comport={4}
                            erros={2}
                        />

                    </div>


                    {/*
                    =====================================================
                    ÁREA CENTRAL
                    =====================================================
                    */}

                    <div className="
                        lg:order-2
                        order-1
                        flex
                        flex-row
                        justify-center
                        items-center
                        lg:w-fit
                        w-full
                        mb-0
                    ">

                        <div className="
                            lg:w-fit
                            w-full
                            block
                            mx-auto
                        ">

                            <div className="w-full">


                                {/*
                                =================================================
                                MENU SUPERIOR
                                =================================================
                                */}

                                <div
                                    id="tutorial-equipes"
                                    className="
                                        flex
                                        flex-row
                                        justify-start
                                        gap-2
                                        items-end
                                        mx-auto
                                    "
                                >

                                    {/* VOLTAR */}

                                    <div
                                        id="tutorial-passar"
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            bg-(--bprimary)
                                            rounded-t-md
                                            text-(--bsecondary)
                                            px-2
                                            pt-1
                                        "
                                    >

                                        <IoArrowBackCircle
                                            className="text-2xl"
                                        />

                                        <p className="
                                            text-xl
                                            sm:flex
                                            hidden
                                        ">

                                            Voltar

                                        </p>

                                    </div>


                                    {/* DÚVIDAS */}

                                    <div className="
                                        h-8
                                        bg-(--bprimary)
                                        px-2
                                        pt-1
                                        rounded-t-md
                                        text-(--bsecondary)
                                        text-xl
                                        flex
                                        items-center
                                        gap-1
                                    ">

                                        <FaQuestionCircle />

                                        <p className="
                                            sm:flex
                                            hidden
                                        ">

                                            Dúvidas

                                        </p>

                                    </div>


                                    {/* SORTEAR */}

                                    <div
                                        id="tutorial-sortear"
                                        className="
                                            h-8
                                            bg-(--bprimary)
                                            px-2
                                            pt-1
                                            rounded-t-md
                                            text-(--bsecondary)
                                            text-xl
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >

                                        <GiPerspectiveDiceSixFacesFive />

                                        <p className="
                                            sm:flex
                                            hidden
                                        ">

                                            Sortear

                                        </p>

                                    </div>


                                    {/* TURMA */}

                                    <div
                                        id="tutorial-turma"
                                        className="
                                            h-8
                                            bg-(--bprimary)
                                            px-2
                                            pt-1
                                            rounded-t-md
                                            text-(--bsecondary)
                                            text-xl
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >

                                        <FaUserGroup />

                                        <p className="
                                            sm:flex
                                            hidden
                                        ">

                                            Turma

                                        </p>

                                    </div>


                                    {/* SALVAR */}

                                    <div
                                        id="tutorial-salvar"
                                        className="
                                            h-8
                                            bg-(--bprimary)
                                            px-2
                                            pt-1
                                            rounded-t-md
                                            text-(--bsecondary)
                                            text-xl
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >

                                        <IoIosSave />

                                        <p className="
                                            sm:flex
                                            hidden
                                        ">

                                            Salvar

                                        </p>

                                    </div>

                                </div>


                                {/*
                                =================================================
                                CABEÇALHO
                                =================================================
                                */}

                                <div
                                    id="tutorial-header"
                                    className="
                                        sm:w-130
                                        min-w-full
                                        text-(--bsecondary)
                                        bg-white
                                        h-fit
                                        mx-auto
                                    "
                                >

                                    <div className="
                                        text-3xl
                                        font-bold
                                        bg-(--bprimary)
                                        pl-5
                                        pr-2
                                        flex
                                        items-center
                                        h-12
                                        justify-between
                                        w-full
                                    ">

                                        <h1 className="
                                            inline-block
                                            text-color-(--bsecondary)
                                            py-2
                                            sm:text-3xl
                                            text-2xl
                                        ">

                                            01: Tema da questão

                                        </h1>

                                        <p className="
                                            inline-block
                                            bg-white
                                            sm:text-2xl
                                            text-xl
                                            rounded-md
                                            px-1
                                        ">

                                            10 letras

                                        </p>

                                    </div>

                                </div>


                                {/*
                                =================================================
                                CORPO
                                =================================================
                                */}

                                <div className="
                                    bg-white
                                    relative
                                ">


                                    {/*
                                    =================================================
                                    TIMER
                                    =================================================
                                    */}

                                    <div
                                        id="tutorial-timer"
                                        className="relative"
                                    >

                                        <div className="
                                            w-full
                                            px-4
                                            pt-2
                                        ">

                                            <div className="
                                                flex
                                                items-center
                                                gap-3
                                            ">


                                                {/* PAUSE */}

                                                <button
                                                    type="button"
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-(--aprimary)
                                                        text-white
                                                    "
                                                >

                                                    <FaPause
                                                        size={16}
                                                    />

                                                </button>


                                                {/* BARRA */}

                                                <div className="
                                                    min-w-0
                                                    flex-1
                                                ">

                                                    <div className="
                                                        h-8
                                                        w-full
                                                        overflow-hidden
                                                        rounded-full
                                                        bg-slate-200
                                                    ">

                                                        <div className="
                                                            h-full
                                                            w-[60%]
                                                            rounded-full
                                                            bg-blue-600
                                                        " />

                                                    </div>

                                                </div>


                                                {/* CONTADOR */}

                                                <span className="
                                                    shrink-0
                                                    text-4xl
                                                    font-bold
                                                    tabular-nums
                                                    text-slate-800
                                                ">

                                                    01:12

                                                </span>


                                                {/* RESET */}

                                                <button
                                                    type="button"
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        text-slate-700
                                                    "
                                                >

                                                    <FaRedoAlt
                                                        size={20}
                                                    />

                                                </button>


                                                {/* CONFIGURAÇÃO */}

                                                <button
                                                    id="tutorial-timer-config"
                                                    type="button"
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        text-slate-700
                                                    "
                                                >

                                                    <FaCog
                                                        size={24}
                                                    />

                                                </button>

                                            </div>

                                        </div>

                                    </div>


                                    {/*
                                    =================================================
                                    IMAGEM
                                    =================================================
                                    */}

                                    <div
                                        id="tutorial-imagem"
                                        className="
                                            flex
                                            justify-center
                                            gap-x-2
                                            items-center
                                            h-fit
                                        "
                                    >

                                        <button
                                            className="
                                                bg-(--asecondary)
                                                text-white
                                                h-fit
                                                p-1
                                                rounded-full
                                                sm:text-4xl
                                                text-2xl
                                                flex
                                                justify-center
                                                items-center
                                                font-bold
                                            "
                                        >

                                            <FaArrowCircleLeft />

                                        </button>


                                        <div className="
                                            flex
                                            items-center
                                            w-32
                                            h-32
                                            p-2
                                        ">

                                            {img ? (

                                                <img
                                                    className="
                                                        w-auto
                                                        mx-auto
                                                        max-h-30
                                                        select-none
                                                        rounded-xl
                                                    "
                                                    src={img}
                                                    alt=""
                                                />

                                            ) : (

                                                <div className="
                                                    w-full
                                                    h-full
                                                    bg-[#e6eae1]
                                                    rounded-xl
                                                " />

                                            )}

                                        </div>


                                        <button
                                            className="
                                                bg-(--asecondary)
                                                text-white
                                                h-fit
                                                p-1
                                                rounded-full
                                                sm:text-4xl
                                                text-2xl
                                                mr-1
                                                flex
                                                justify-center
                                                items-center
                                                font-bold
                                            "
                                        >

                                            <FaArrowCircleRight />

                                        </button>

                                    </div>


                                    {/*
                                    =================================================
                                    PALAVRA
                                    =================================================
                                    */}

                                    <div
                                        id="tutorial-palavra"
                                        className="
                                            select-none
                                            flex
                                            sm:gap-2
                                            gap-1
                                            justify-center
                                            px-2
                                        "
                                    >

                                        {[...Array(7)].map(
                                            (_, index) => (

                                                <div
                                                    key={index}
                                                    className="
                                                        bg-[#e6eae1]
                                                        text-(--asecondary)
                                                        border-3
                                                        sm:w-8
                                                        sm:text-4xl
                                                        sm:py-1
                                                        py-1
                                                        w-5
                                                        text-lg
                                                        rounded-md
                                                        text-center
                                                    "
                                                >

                                                    <span className="opacity-0">
                                                        P
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>


                                    {/*
                                    =================================================
                                    DICA + REVELAR
                                    =================================================
                                    */}

                                    <div className="
                                        flex
                                        flex-row
                                        justify-center
                                        items-center
                                        gap-3
                                    ">

                                        <button
                                            id="tutorial-dica"
                                            className="
                                                h-fit
                                                py-1
                                                px-3
                                                rounded-xl
                                                my-3
                                                bg-(--asecondary)
                                                transition-all
                                                duration-300
                                                w-fit
                                                max-w-96
                                                flex
                                                flex-row
                                                items-center
                                                text-white
                                            "
                                        >

                                            <span className="
                                                flex
                                                flex-col
                                                justify-center
                                                items-center
                                                w-fit
                                            ">

                                                <FaLightbulb
                                                    className="text-xl"
                                                />

                                            </span>

                                            <span className="
                                                cursor-pointer
                                                wrap-normal
                                                text-center
                                                max-w-80
                                                px-2
                                            ">

                                                Dica desativada

                                            </span>

                                        </button>


                                        <button
                                            id="tutorial-revelar"
                                            className="
                                                h-8
                                                px-3
                                                rounded-xl
                                                my-3
                                                bg-(--asecondary)
                                                transition-all
                                                duration-300
                                                w-fit
                                                flex
                                                flex-row
                                                items-center
                                                text-2xl
                                                text-white
                                            "
                                        >

                                            <IoMdEye />

                                        </button>

                                    </div>


                                    <hr className="border-2" />


                                    {/*
                                    =================================================
                                    ÁREA DE DIGITAÇÃO
                                    =================================================
                                    */}

                                    <div className="
                                        flex
                                        items-center
                                        relative
                                        w-fit
                                        px-5
                                        mx-auto
                                    ">


                                        {/* MODO */}

                                        <button
                                            id="tutorial-modo"
                                            className="
                                                ml-4
                                                px-2
                                                h-fit
                                                flex
                                                flex-row
                                                items-center
                                                absolute
                                                sm:-left-20
                                                -left-11
                                            "
                                        >

                                            <MdChangeCircle
                                                className="
                                                    text-2xl
                                                    text-(--asecondary)
                                                "
                                            />

                                            <p className="
                                                sm:flex
                                                hidden
                                            ">

                                                Letra

                                            </p>

                                        </button>


                                        {/* INPUT */}

                                        <div
                                            id="tutorial-input"
                                            className="
                                                flex
                                                gap-2
                                                items-center
                                            "
                                        >

                                            <input
                                                disabled
                                                autoComplete="off"
                                                maxLength={1}
                                                placeholder="Digite uma letra"
                                                className="
                                                    uppercase
                                                    my-3
                                                    sm:w-60
                                                    sm:text-xl
                                                    text-base
                                                    w-35
                                                    h-11
                                                    sm:px-3
                                                    px-1
                                                    rounded-sm
                                                    border-3
                                                    bg-[#e6eae1]
                                                "
                                                type="text"
                                            />


                                            {/* ENVIAR */}

                                            <button
                                                id="tutorial-enviar"
                                                disabled
                                                className="
                                                    mx-0
                                                    h-fit
                                                    absolute
                                                    -right-2.5
                                                "
                                            >

                                                <IoSend
                                                    className="
                                                        text-2xl
                                                        text-(--asecondary)
                                                    "
                                                />

                                            </button>

                                        </div>

                                    </div>


                                    {/*
                                    =================================================
                                    ERROS
                                    =================================================
                                    */}

                                    <div
                                        id="tutorial-erros"
                                        className="
                                            flex
                                            justify-center
                                            text-center
                                            mt-0
                                            m-3
                                            px-3
                                            w-11/12
                                            pb-1
                                            whitespace-nowrap
                                        "
                                    >

                                        <p className="
                                            font-bold
                                            text-(--asecondary)
                                            text-center
                                            pr-2
                                        ">

                                            Erros:

                                        </p>

                                        <div className="
                                            overflow-x-auto
                                            overflow-y-hidden
                                            max-w-96
                                        ">

                                            <p className="
                                                font-bold
                                                text-red-600
                                                px-2
                                            ">

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


                    {/*
                    =====================================================
                    EQUIPE DIREITA
                    =====================================================
                    */}

                    <div className="
                        lg:order-3
                        order-2
                    ">

                        <CardTutorial
                            equipe="Equipe Vermelha"
                            bgcolor="bg-[var(--cprimary)]"
                            titlecolor="text-white"
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