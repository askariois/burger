import React from 'react';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-content/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-content/burger-constructor/burger-constructor';
import {IngredientContext} from "../../services/constructorContext";
import { baseUrl } from '../../constants/global';

import app from './app.module.css';



function App() {
    
    const URL = `${baseUrl}ingredients`;

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
            <AppHeader/>
            <div className={`${app.container}`}>
                <div className={`${app.flex} ${app.justify_between}`}>
                    <IngredientContext.Provider value={state}>
                        <BurgerIngredients/>
                        <BurgerConstructor/>
                    </IngredientContext.Provider>
                </div>
            </div>
        </>
    );
}


export default App;