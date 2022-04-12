import React from "react";
import PropTypes from "prop-types";

import modal_overlay from "./modal-overlay.module.css";

function ModalOverlay(props) {
  return (
    <div>
      <div className={modal_overlay.overlay} onClick={props.closeOverlay}></div>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
