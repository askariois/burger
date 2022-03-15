import React from 'react';
import PropTypes from 'prop-types';

import modal_overlay from './modal-overlay.module.css';



function ModalOverlay(props) {

   const keydownCloseModal = (e) => {
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
      <div>
         <div className={modal_overlay.overlay} onClick={props.closeOverlay}>
         </div>
         {props.children}
      </div>
   );
}

ModalOverlay.propTypes = {
   closeOverlay: PropTypes.func.isRequired,
   children: PropTypes.element.isRequired ,
}

export default ModalOverlay;