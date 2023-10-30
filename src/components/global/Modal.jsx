import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.scss";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  const backgroundRef = useRef();

  useEffect(() => {
    if (openName) document.documentElement.classList.add("modal");

    if (
      !openName &&
      document.documentElement.classList.contains("modal") &&
      [...document.body.children].filter((el) =>
        el.outerHTML.startsWith("<div")
      ).length < 2
    )
      document.documentElement.classList.remove("modal");
  }, [openName]);

  if (name !== openName) return null;

  return createPortal(
    <div
      className={styles.background}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
