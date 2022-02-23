import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AccountButton() {
  return (
      <div className='flex justify-between align-center mt-4 mb-4 ml-5 mr-5'>
            <BurgerIcon type="primary" />
            <span className='ml-2'>Конструктор</span>
      </div>
  );
}

export default AccountButton;