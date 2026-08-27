import { useEffect } from "react";
import { setSoundEnabled } from "./sounds";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";



interface PropsControlSound {
  modeSound: boolean;
  setModeSound: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlSound({
  modeSound,
  setModeSound,
}: PropsControlSound) {

  function toggleSound() {
    setModeSound((prev) => !prev);
  }

  useEffect(() => {
  setSoundEnabled(modeSound);
}, [modeSound]);


  return (
     <div className="absolute m-4 top-0 right-0 group">

      <button
        onClick={toggleSound}
        className= {` text-white hover:text-amber-400 transition duration-300 text-5xl cursor-pointer`}
      >
        {modeSound ? (
          <FaVolumeUp />
        ) : (
          <FaVolumeMute />
        )}
      </button>

      {/* Tooltip */}
      <div
        className="
          absolute right-0 top-full mt-2
          w-max
          rounded-md
          bg-white
          text-black
          text-sm
          px-3
          py-2
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all
          duration-200
          pointer-events-none
          z-50
        "
      >
        {modeSound ? "Desativar som" : "Ativar som"}
      </div>

    </div>
  );
}