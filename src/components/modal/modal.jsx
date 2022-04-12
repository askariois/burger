import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import ModalOverlay from "../modal-overlay/modal-overlay";

import modal from "./modal.module.css";

import modal_close from "../../images/close.svg";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("main-modal");

function Modal(props) {
  const keydownCloseModal = (e) => {
    if (e.code === "Escape") {
      props.close();
    }
  };
  useEffect(() => {
    document.addEventListener("keyup", keydownCloseModal);
    return () => {
      document.removeEventListener("keyup", keydownCloseModal);
    };
  }, []);

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

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  header: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
