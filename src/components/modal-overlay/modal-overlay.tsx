import React from 'react';

import modal_overlay from './modal-overlay.module.css';


interface Props {
   closeOverlay: () => void;
   children:JSX.Element;
}

function ModalOverlay(props: Props) {

   const keydownCloseModal = (e: any) => {
      if (e.code === "Escape") {
         props.closeOverlay();
      }
   };
   React.useEffect(() => {
      document.addEventListener('keyup', keydownCloseModal);
      return () => {
         document.removeEventListener('keyup', keydownCloseModal)
      }
   }, []);
   return (
      <div className={modal_overlay.overlay} onClick={props.closeOverlay}>
         {props.children}
      </div>
   );
}



export default ModalOverlay;