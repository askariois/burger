import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-content/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-content/burger-constructor/burger-constructor';

import app from './app.module.css';


function App() {

    return (
        <>
            <AppHeader/>
            <div className={`${app.container}`}>
                <div className={`${app.flex} ${app.justify_between}`}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </div>
            </div>
        </>
    );
}


export default App;
