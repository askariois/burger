import { IModalOverlayProps } from "../../services/types/modal";
import modal_overlay from "./modal-overlay.module.css";



function ModalOverlay(props: IModalOverlayProps) {
  return (
    <div>
      <div className={modal_overlay.overlay} onClick={props.closeOverlay}></div>
      {props.children}
    </div>
  );
}

export default ModalOverlay;
