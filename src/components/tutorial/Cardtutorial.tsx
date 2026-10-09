import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaGear } from "react-icons/fa6";

interface CountCardProps {
  equipe: string;
  bgcolor: string;
  titlecolor: string;
  textcolor: string;

  name: string;
  totalpt: number;
  statee: number;
  comport: number;

  erros: number;
}

export default function CardTutorial({
  bgcolor,
  titlecolor,
  textcolor,
  name,
  totalpt,
  statee,
  comport,
  erros,
}: CountCardProps) {
  return (
    <div
      className={`
        max-h-dvh
        w-fit
        bg-white
        font-bold
        px-0
        whitespace-nowrap
        flex
        flex-col
        items-center
        justify-center
        gap-y-2
        
        ${textcolor}
      `}
    >
      {/* NOME DA EQUIPE */}
      <p
        className={`
          ${bgcolor}
          text-center
          w-full
          px-3
          text-bold
          ${titlecolor}
        `}
      >
        {name}
      </p>

      {/* PONTUAÇÃO */}
      <div
        className={`
          flex
          items-end
          ${
            comport > 3
              ? "text-green-800"
              : comport < 3
                ? "text-red-700"
                : textcolor
          }
        `}
      >
        <div className="inline-block">
          <p className="inline-block text-5xl">
            {totalpt}
          </p>

          <p className="bottom-0 inline-block">
            {totalpt === 1 || totalpt === 0 ? "Pt" : "Pts"}
          </p>
        </div>
      </div>

      {/* BOTÕES DE PONTUAÇÃO */}
      <div className="flex flex-col justify-center items-center w-fit">
        <div>
          <button
            type="button"
            className="cursor-pointer bg-white px-2"
          >
            <IoMdAddCircleOutline
              className="
                cursor-pointer
                hover:bg-green-400
                active:bg-green-400
                transition
                duration-300
                text-4xl
                rounded-full
                p-0
                flex
                items-center
                justify-center
              "
            />
          </button>

          <button
            type="button"
            className="bg-white px-2"
          >
            <IoMdRemoveCircleOutline
              className="
                cursor-pointer
                hover:bg-red-400
                active:bg-red-400
                transition
                duration-300
                text-4xl
                rounded-full
                p-0
                flex
                items-center
                justify-center
              "
            />
          </button>
        </div>

        {/* ERROS */}
        <button
          type="button"
          className="cursor-pointer hover:text-red-700"
        >
          Erros : {erros}
        </button>

        {/* ENERGIA */}
        {statee > 5 ? (
          <div className="flex justify-center items-center gap-1 bg-white">
            <p className="pl-2 text-sm flex items-center justify-center">
              Energia: {statee}
            </p>

            <AiFillThunderbolt className="inline-block" />
          </div>
        ) : (
          <div
            className={`
              ${
                statee < 5
                  ? "flex justify-center items-center"
                  : "grid grid-cols-5 place-items-center justify-center w-fit"
              }
            `}
          >
            {[...Array(statee)].map((_, index) => (
              <AiFillThunderbolt
                key={index}
                className="inline-block"
              />
            ))}
          </div>
        )}

        {/* CONFIGURAÇÕES */}
        <div
          className={`
            ${textcolor}
            flex
            gap-1
            px-3
            py-1
            items-center
            justify-center
          `}
        >
          <FaGear
            className="
              font-bold
              text-xl
              transition
              duration-300
            "
          />

          Configurações
        </div>
      </div>
    </div>
  );
}