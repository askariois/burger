import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function RightButton() {
  return (
      <div className='flex justify-between align-center mt-4 mb-4 ml-5 mr-5'>
            <ProfileIcon type="secondary" />
            <span className='ml-2 text-secondary text'>Личный кабинет</span>
      </div>
  );
}

export default RightButton;