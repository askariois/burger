import React from 'react';
import header_styles from './app-header.module.css';
import {  Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import LeftButton from './left-button/left-button';
import RightButton from './right-button/right-button';

function AppHeader() {
  return (
    <header className={`${header_styles.bg_navbar}`}>
        <div className={`container`}>
            <nav className={`flex justify-between align-center pt-6 pb-6`}>
               <LeftButton/>
               <Logo/>
               <RightButton/>
            </nav>
        </div>
    </header>
  );
}

export default AppHeader;
