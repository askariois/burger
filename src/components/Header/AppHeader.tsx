import React from 'react';
import header_styles from './header.module.css';
import {  Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import LeftButton from './LeftButton/LeftButton';
import RightButton from './RightButton/RightButton';

function Header() {
  return (
    <div className={`${header_styles.bg_navbar} flex justify-between align-center pt-6 pb-6`}>
       <LeftButton/>
       <Logo/>
       <RightButton/>
    </div>
  );
}

export default Header;
