import React from 'react';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";

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
