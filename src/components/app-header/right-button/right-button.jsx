import React from 'react';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import right_button from './right-button.module.css';

function RightButton() {
  return (
    <a href="#" className={`${right_button.tex_decoratinon_none} flex justify-between align-center mt-4 mb-4 ml-15 mr-5`}>
      <ProfileIcon type="secondary" />
      <span className='ml-2 text-secondary text'>Личный кабинет</span>
    </a>
  );
}

export default RightButton;