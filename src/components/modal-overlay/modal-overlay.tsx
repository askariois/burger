import React from 'react';
import modal_overlay from './modal-overlay.module.css';
import modal_close from '../../images/close.svg';


function ModalOverlay(props: any) {


   React.useEffect(() => {
      document.addEventListener('keyup', (e) => {
         if (e.code === "Escape") {
            props.closeOverlay();
         }
      });
   });
   return (
      <div className={`${modal_overlay.overlay}`} onClick={props.closeOverlay}>
         {props.children}
      </div>
   );
}

export default ModalOverlay;