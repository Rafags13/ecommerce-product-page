import { useContext } from "react";
import { ModalContext, ModalContextType } from "../context/modalContext";

export default function useModalContext() {
  const modalContext = useContext(ModalContext) as ModalContextType;

  if (modalContext === undefined) {
    throw new Error("useModalContext must be used within a ModalContextProvider");
  }

  return modalContext;
}