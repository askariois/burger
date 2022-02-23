import React from 'react';
import header_styles from './header.module.css';
import { BurgerIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import LeftButton from './LeftButton/LeftButton';

function Header() {
  return (
    <div className='flex justify-between'>
       <LeftButton/>
       <Logo/>
    </div>
  );
}

export default Header;
