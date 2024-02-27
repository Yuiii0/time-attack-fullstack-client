import { useModal } from "@/contexts/modal.context";
import React from "react";

function Modal({ children }: { children: React.ReactNode }) {
  const modal = useModal();
  const handleClickBackdrop = () => {
    modal.close();
  };
  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={handleClickBackdrop}
    >
      <div
        className="bg-white rounded-md w-full max-w-md px-5 py-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
