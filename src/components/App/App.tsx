import React from 'react';
import BurgerContent from '../burger-content/burger-content';
import Header from '../header/app-header';
import {data} from './utils/data.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <BurgerContent/>
    </div>
  );
}

export default App;
