"use client"

import {
    FaPause,
    FaRedoAlt,
    FaCog,
} from "react-icons/fa"

export default function Timer() {

    return (
        <div className="w-full px-4 pt-2">
            <div className="flex items-center gap-3">

                {/* Play / Pause */}

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
                    <FaPause size={16} />
                </button>


                {/* Barra de progresso */}

                <div className="min-w-0 flex-1">
                    <div
                        className="
                            h-8
                            w-full
                            overflow-hidden
                            rounded-full
                            bg-slate-200
                        "
                    >
                        <div
                            className="
                                h-full
                                w-[60%]
                                rounded-full
                                bg-blue-600
                            "
                        />
                    </div>
                </div>


                {/* Contador */}

                <span
                    className="
                        shrink-0
                        text-4xl
                        font-bold
                        tabular-nums
                        text-slate-800
                    "
                >
                    01:12
                </span>


                {/* Reset */}

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
                    <FaRedoAlt size={20} />
                </button>


                {/* Configurações */}

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
                    <FaCog size={24} />
                </button>

            </div>
        </div>
    )
}