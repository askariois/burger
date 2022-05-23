import { useEffect } from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modal-overlay/modal-overlay";

import modal from "./modal.module.css";

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IModalProps } from "../../services/types/modal";

const modalRoot = document.getElementById("main-modal");


function Modal(props: IModalProps) {
  useEffect(() => {
    const keydownCloseModal = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        props.close();
      }
    };
    document.addEventListener("keyup", keydownCloseModal);
    return () => {
      document.removeEventListener("keyup", keydownCloseModal);
    };
  }, [props.close]);

  return modalRoot
    ? ReactDOM.createPortal(
      <div>
        <ModalOverlay closeOverlay={props.close}>
          <div className={`${modal.modal_content} pt-10 pr-10 pb-15 pl-10`}>
            <div className="flex align-center justify-between">
              <h1>{props.header}</h1>
              <a href="#" className="flex">
                <CloseIcon type="primary" onClick={props.close} />
              </a>
            </div>
            {props.children}
          </div>
        </ModalOverlay>
      </div>,
      modalRoot
    )
    : null;
}


export default Modal;
