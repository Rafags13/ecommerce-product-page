import { ReactNode, createContext, useState } from "react";

export type ModalContextType = {
  modalState: boolean;
  toggle: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState(false);

  const toggle = () => {
    setModalState(!modalState);
  }

  return <ModalContext.Provider value={{ modalState, toggle }}>{children}</ModalContext.Provider>
}

export default ModalProvider;

