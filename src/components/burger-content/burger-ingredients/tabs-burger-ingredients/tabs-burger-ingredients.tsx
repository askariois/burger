import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

function TabsBurgerIngredients() {
    const [current, setCurrent] = React.useState('rolls')

    return (
        <div>
            <h1>Соберите бургер</h1>
            <div className={`flex`}>
                <Tab value="rolls" active={current === 'rolls'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="toppings" active={current === 'toppings'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
        </div>
    );
}

export default TabsBurgerIngredients;
