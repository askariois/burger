import React from 'react';
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

function BurgerContent() {
    return (
        <section>
            <div className={`container`}>
                <BurgerIngredients/>
            </div>
        </section>
    );
}

export default BurgerContent;
