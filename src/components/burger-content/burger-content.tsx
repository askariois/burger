import React from 'react';
import BurgerConstructor from './burger-constructor/burger-constructor';
import BurgerIngredients from './burger-ingredients/burger-ingredients';

function BurgerContent() {
    return (
        <section>
            <div className={`container`}>
                <div className={`flex justify-between`}>
                <BurgerIngredients/>
                <BurgerConstructor/>
                </div>
            </div>
        </section>
    );
}

export default BurgerContent;
