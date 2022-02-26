import React from 'react';
import AppHeader from '../app-header/app-header';
import { data } from '../../utils/data.js';
import app from './app.module.css';
import BurgerIngredients from '../burger-content/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-content/burger-constructor/burger-constructor';
import Modal from '../modal/modal';


function App() {
  const URL = 'https://norma.nomoreparties.space/api/ingredients';

  const [state, setState] = React.useState([]);


  React.useEffect(() => {
    const getProductData = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setState(data.data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    }

    getProductData();
  }, []);



  return (
    <>
      <AppHeader />
      <div className={`${app.container}`}>
        <div className={`${app.flex} ${app.justify_between}`}>
          <BurgerIngredients card={state} />
          <BurgerConstructor card={state} />
        </div>
      </div>
    </>
  );
}


export default App;
