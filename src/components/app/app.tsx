import React from 'react';
import AppHeader from '../app-header/app-header';
import { data } from '../../utils/data.js';
import app from './app.module.css';
import BurgerIngredients from '../burger-content/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-content/burger-constructor/burger-constructor';


function App() {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     product: { data }
  //   }
  // }
  const [state, setState] = React.useState();

  return (
    <>
      <AppHeader />
      <div className={`${app.container}`}>
        <div className={`${app.flex} ${app.justify_between}`}>
          <BurgerIngredients card={data} />
          <BurgerConstructor card={data} />
        </div>
      </div>
    </>
  );
}


export default App;
