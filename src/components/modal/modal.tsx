import React from 'react';
import ReactDOM from 'react-dom';

import ModalOverlay from '../modal-overlay/modal-overlay';

import modal from './modal.module.css';

import modal_close from '../../images/close.svg';



const modalRoot = document.getElementById("main-modal");

function Modal(props: any) {
   return modalRoot ? ReactDOM.createPortal(
      <div>
         <ModalOverlay closeOverlay={props.close} >
            <div className={`${modal.modal_content} pt-10 pr-10 pb-15 pl-10`}>
               <div className='flex align-center justify-between'>
                  <h1>{props.header}</h1>
                  <a href="#" className='flex'>
                     <img src={modal_close} className={`${modal.img_width}`} onClick={props.close} />
                  </a>
               </div>
               {props.children}
            </div>
         </ModalOverlay>
      </div>,
      modalRoot
   ) : null;
}


export default Modal;