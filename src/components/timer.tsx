"use client"

import { useEffect, useMemo, useState } from "react"
import {
    FaPlay,
    FaPause,
    FaRedoAlt,
    FaCog,
    FaCheck,
    FaClock,
} from "react-icons/fa"

type TimerProps = {
    fase: number
    totalTime: number;
    timeLeft: number;
    initialTime: number;
    setTotalTime: React.Dispatch<React.SetStateAction<number>>;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function Timer({ fase, totalTime, setTotalTime, timeLeft, setTimeLeft, initialTime }: TimerProps) {

    /*
     * ============================================================
     * CONFIGURAÇÃO INICIAL
     * ============================================================
     */





    const [isRunning, setIsRunning] = useState(true)

    const [isConfigOpen, setIsConfigOpen] = useState(false)

    /*
     * Timer ativado/desativado
     */
    const [isTimerEnabled, setIsTimerEnabled] = useState(true)

    /*
     * Valores temporários da configuração
     */
    const [configMinutes, setConfigMinutes] = useState(
        Math.floor(initialTime / 60)
    )

    const [configSeconds, setConfigSeconds] = useState(
        initialTime % 60
    )


    /*
     * ============================================================
     * MUDANÇA DE FASE
     * ============================================================
     *
     * Quando muda a pergunta/fase:
     * - mantém o tempo configurado
     * - reinicia a contagem
     * - pausa o timer
     *
     * O estado ativado/desativado NÃO é alterado.
     */

    useEffect(() => {

        setTimeLeft(totalTime)
        setIsRunning(true)

    }, [fase])


    /*
     * ============================================================
     * PERCENTUAL DA BARRA
     * ============================================================
     */

    const progress = useMemo(() => {

        if (totalTime <= 0) return 0

        return (timeLeft / totalTime) * 100

    }, [timeLeft, totalTime])


    /*
     * ============================================================
     * TIMER
     * ============================================================
     */

    useEffect(() => {

        if (!isRunning || !isTimerEnabled) {
            return
        }

        const interval = setInterval(() => {

            setTimeLeft((current) => {

                if (current <= 1) {

                    setIsRunning(false)

                    return 0
                }

                return current - 1
            })

        }, 1000)

        return () => clearInterval(interval)

    }, [isRunning, isTimerEnabled])


    /*
     * ============================================================
     * FORMATAR TEMPO
     * ============================================================
     */

    function formatTime(seconds: number) {

        const minutes = Math.floor(seconds / 60)

        const remainingSeconds = seconds % 60

        return `${String(minutes).padStart(2, "0")}:${String(
            remainingSeconds
        ).padStart(2, "0")}`
    }


    /*
     * ============================================================
     * INICIAR / PAUSAR
     * ============================================================
     */

    function toggleTimer() {

        if (timeLeft <= 0) {
            return
        }

        setIsRunning((current) => !current)
    }


    /*
     * ============================================================
     * RESETAR E INICIAR
     * ============================================================
     */

    function resetTimer() {

        setTimeLeft(totalTime)

        setIsRunning(true)
    }


    /*
     * ============================================================
     * ABRIR / FECHAR CONFIGURAÇÃO
     * ============================================================
     */

    function toggleConfiguration() {

        if (isConfigOpen) {

            cancelConfiguration()

            return
        }

        setConfigMinutes(
            Math.floor(totalTime / 60)
        )

        setConfigSeconds(
            totalTime % 60
        )

        setIsRunning(false)

        setIsConfigOpen(true)
    }


    /*
     * ============================================================
     * APLICAR CONFIGURAÇÃO
     * ============================================================
     */

    function applyConfiguration() {

        const minutes = Math.max(
            0,
            configMinutes
        )

        const seconds = Math.min(
            59,
            Math.max(
                0,
                configSeconds
            )
        )

        const newTime =
            minutes * 60 + seconds

        if (newTime <= 0) {
            return
        }

        setTotalTime(newTime)

        setTimeLeft(newTime)

        setIsRunning(false)

        setIsConfigOpen(false)
    }


    /*
     * ============================================================
     * CANCELAR CONFIGURAÇÃO
     * ============================================================
     */

    function cancelConfiguration() {

        setConfigMinutes(
            Math.floor(totalTime / 60)
        )

        setConfigSeconds(
            totalTime % 60
        )

        setIsConfigOpen(false)
    }


    /*
     * ============================================================
     * DESATIVAR TIMER
     * ============================================================
     */

    function disableTimer() {

        setIsRunning(false)

        setIsConfigOpen(false)

        setIsTimerEnabled(false)
    }


    /*
     * ============================================================
     * REATIVAR TIMER
     * ============================================================
     */

    function enableTimer() {

        setIsTimerEnabled(true)
    }


    /*
     * ============================================================
     * COR DA BARRA
     * ============================================================
     *
     * > 50%  = azul
     * <= 50% = amarelo
     * <= 25% = laranja
     * 0%     = vermelho
     */

    function getProgressColor() {

        if (timeLeft === 0) {
            return "bg-red-600"
        }

        if (progress <= 25) {
            return "bg-orange-500"
        }

        if (progress <= 50) {
            return "bg-yellow-400"
        }

        return "bg-blue-600"
    }


    /*
     * ============================================================
     * TIMER DESATIVADO
     * ============================================================
     *
     * Aqui desaparece:
     *
     * - play
     * - barra
     * - contador
     * - reset
     *
     * E permanece SOMENTE o ícone de tempo.
     *
     * O visual continua usando exatamente o mesmo tamanho
     * e alinhamento geral do componente.
     */

    if (!isTimerEnabled) {

        return (
            <div className={`w-full p-4 ${!isTimerEnabled && 'absolute top-0 right-0'}`}>

                <div className="flex items-center justify-end">

                    <button
                        type="button"
                        onClick={enableTimer}
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            text-slate-700
                            transition
                            hover:bg-slate-100
                        "
                        aria-label="Ativar timer"
                        title="Ativar timer"
                    >
                        <FaClock size={24} />
                    </button>

                </div>

            </div>
        )
    }


    /*
     * ============================================================
     * TIMER
     * ============================================================
     */

    return (
        <div className="w-full p-4">

            <div className="flex items-center gap-3">

                {/* =================================================
                    MODO TIMER
                ================================================== */}

                {!isConfigOpen && (
                    <>
                        {/* Play / Pause */}

                        <button
                            type="button"
                            onClick={toggleTimer}
                            disabled={timeLeft <= 0}
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
                                transition
                                hover:bg-blue-800
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                            aria-label={
                                isRunning
                                    ? "Pausar timer"
                                    : "Iniciar timer"
                            }
                        >
                            {isRunning ? (
                                <FaPause size={16} />
                            ) : (
                                <FaPlay
                                    size={16}
                                    className="ml-0.5"
                                />
                            )}
                        </button>


                        {/* Barra */}

                        <div className="min-w-0 flex-1">

                            <div className="
                                h-8
                                w-full
                                overflow-hidden
                                rounded-full
                                bg-slate-200
                            ">

                                <div
                                    className={`
                                        h-full
                                        rounded-full
                                        transition-[width]
                                        duration-1000
                                        ease-linear
                                        ${getProgressColor()}
                                    `}
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />

                            </div>

                        </div>


                        {/* Contador */}

                        <span
                            className={`
                                shrink-0
                                text-4xl
                                font-bold
                                tabular-nums
                                ${timeLeft === 0
                                    ? "text-red-600"
                                    : "text-slate-800"
                                }
                            `}
                        >
                            {formatTime(timeLeft)}
                        </span>


                        {/* Reset */}

                        <button
                            type="button"
                            onClick={resetTimer}
                            className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                text-slate-700
                                transition
                                hover:bg-slate-100
                            "
                            aria-label="Resetar e iniciar timer"
                        >
                            <FaRedoAlt size={20} />
                        </button>
                    </>
                )}


                {/* =================================================
                    MODO CONFIGURAÇÃO
                ================================================== */}

                {isConfigOpen && (

                    <div className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        gap-3
                    ">

                        {/* ==============================
                            DESATIVAR
                        =============================== */}

                        <button
                            type="button"
                            onClick={disableTimer}
                            className="
                                flex
                                h-10
                                shrink-0
                                items-center
                                rounded-lg
                                px-3
                                font-bold
                                text-white
                                bg-red-600
                                transition
                                hover:bg-red-500 mr-8
                            "
                        >
                            Desativar
                        </button>


                        {/* ==============================
                            MINUTOS
                        =============================== */}

                        <div className="
                            flex
                            min-w-0
                            flex-1
                            items-center
                            gap-2
                        ">

                            <label
                                htmlFor="timer-minutes"
                                className="
                                    shrink-0
                                    text-sm
                                    font-semibold
                                    text-slate-600
                                "
                            >
                                Min
                            </label>

                            <input
                                id="timer-minutes"
                                type="number"
                                min={0}
                                max={999}
                                value={configMinutes}
                                onChange={(event) =>
                                    setConfigMinutes(
                                        Math.max(
                                            0,
                                            Number(
                                                event.target.value
                                            )
                                        )
                                    )
                                }
                                className="
                                    h-10
                                    w-full
                                    min-w-0
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-3
                                    text-center
                                    font-bold
                                    outline-none
                                    focus:border-(--aprimary)
                                "
                            />

                        </div>


                        {/* Dois pontos */}

                        <span
                            className="
                                shrink-0
                                text-xl
                                font-bold
                                text-slate-700
                            "
                        >
                            :
                        </span>


                        {/* ==============================
                            SEGUNDOS
                        =============================== */}

                        <div className="
                            flex
                            min-w-0
                            flex-1
                            items-center
                            gap-2
                        ">

                            <label
                                htmlFor="timer-seconds"
                                className="
                                    shrink-0
                                    text-sm
                                    font-semibold
                                    text-slate-600
                                "
                            >
                                Seg
                            </label>

                            <input
                                id="timer-seconds"
                                type="number"
                                min={0}
                                max={59}
                                value={configSeconds}
                                onChange={(event) =>
                                    setConfigSeconds(
                                        Math.min(
                                            59,
                                            Math.max(
                                                0,
                                                Number(
                                                    event.target.value
                                                )
                                            )
                                        )
                                    )
                                }
                                className="
                                    h-10
                                    w-full
                                    min-w-0
                                    rounded-lg
                                    border
                                    border-slate-300
                                    px-3
                                    text-center
                                    font-bold
                                    outline-none
                                    focus:border-(--aprimary)
                                "
                            />

                        </div>


                        {/* ==============================
                            APLICAR
                        =============================== */}

                        <button
                            type="button"
                            onClick={applyConfiguration}
                            className="
                                flex
                                h-10
                                shrink-0
                                items-center
                                gap-2
                                rounded-lg
                                bg-(--aprimary)
                                px-4
                                font-bold
                                text-white
                                transition
                                hover:bg-blue-800
                            "
                        >
                            <FaCheck size={15} />

                            Aplicar
                        </button>

                    </div>
                )}


                {/* =================================================
                    CONFIGURAÇÃO
                ================================================== */}

                <button
                    type="button"
                    onClick={toggleConfiguration}
                    className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition

                        ${isConfigOpen
                            ? "bg-slate-200 text-(--aprimary)"
                            : "text-slate-700 hover:bg-slate-100"
                        }
                    `}
                    aria-label={
                        isConfigOpen
                            ? "Fechar configuração"
                            : "Configurar timer"
                    }
                >

                    <FaCog
                        size={24}
                        className={`
                            transition-transform
                            duration-200

                            ${isConfigOpen
                                ? "rotate-45"
                                : ""
                            }
                        `}
                    />

                </button>

            </div>

        </div>
    )
}