import React from 'react';
import Header from '../header/app-header';
import {data} from '../../utils/data.js';
import './App.css';
import BurgerIngredients from '../burger-content/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-content/burger-constructor/burger-constructor';


class App extends React.Component { 
  constructor(props:any) {
    super(props);
    this.state = {
      product : {data}
    }
  }
 
  render() {
  return (
      <>
        <Header/>
        <div className={`container`}>
            <div className={`flex justify-between`}>
              <BurgerIngredients card={data}/>
              <BurgerConstructor  card={data} />
          </div>
        </div>
      </>
    );
  }
} 

export default App;
