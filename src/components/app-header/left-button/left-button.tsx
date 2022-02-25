import React from 'react';
import left_button from './left-button.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function LeftButton() {
  return (
     <div className='flex align-center'>
        <a href="#"  className={`${left_button.text_white} flex justify-between align-center mt-4 mb-4 ml-5 mr-5`}>
            <BurgerIcon type="primary" />
            <span className='ml-2'>Конструктор</span>
         </a>
      <a href="#" className= {`${left_button.text_white} flex justify-between align-center  mt-4 mb-4 ml-5 mr-5`}>
            <ListIcon type="secondary" />   
            <span className='ml-2 text-secondary'>Лента заказов</span>
      </a>
    </div>
  );
}

export default LeftButton;
