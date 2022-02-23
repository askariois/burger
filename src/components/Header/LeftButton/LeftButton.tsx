import React from 'react';
import header_styles from './header.module.css';
import { BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function LeftButton() {
  return (
     <div className='flex align-center'>
      <div className='flex justify-between align-center mt-4 mb-4 ml-5 mr-5'>
            <BurgerIcon type="primary" />
            <span className='ml-2'>Конструктор</span>
      </div>
      <div className='flex justify-between align-center  mt-4 mb-4 ml-5 mr-5'>
            <ListIcon type="secondary" />   
            <span className='ml-2 text-secondary'>Лента заказов</span>
      </div>
    </div>
  );
}

export default LeftButton;
