import React from "react";
import { ModalPortal } from "./Wrapper";

interface ProductModalProps {
  onClose: () => void;
}

export const ModalContainer: React.FC<ProductModalProps> = ({ onClose }) => {
  return (
    <ModalPortal>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
        <div className="bg-white p-8 max-w-md">
          <div className="flex justify-end mb-2">
            <button onClick={onClose}>Close</button>
          </div>
          <div>MODAL CONTAINER</div>
        </div>
      </div>
    </ModalPortal>
  );
};
