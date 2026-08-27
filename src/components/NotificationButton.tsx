import { IoIosNotifications } from "react-icons/io";

interface NotificationButtonProps {
  onClick: () => void;
}

export default function NotificationButton({
  onClick,
}: NotificationButtonProps) {
  return (
    <div className="fixed bottom-4 right-6 group">

      <IoIosNotifications
        onClick={onClick}
        className="
          text-white
          hover:text-amber-400
          transition
          duration-300
          text-5xl
          cursor-pointer
        "
      />

      {/* Tooltip */}
      <div
        className="
          absolute
          right-0
          bottom-full
          mb-2
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
        Notificações
      </div>

    </div>
  );
}