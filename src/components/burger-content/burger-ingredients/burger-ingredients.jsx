import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TabsBurgerIngredients from './tabs-burger-ingredients/tabs-burger-ingredients';
import CardBurgerIngredient from './card-burger-ingredient/card-burger-ingredients';

import { useDispatch, useSelector } from 'react-redux';

import burgeringredient from "./burger-ingredient.module.css";




function BurgerIngredients() {

    const dispatch = useDispatch();
 
    const { feed } = useSelector(state => state.ingredient);

    const bun = feed.filter((item) => item.type === 'bun');
    const sauce = feed.filter((item) => item.type === 'sauce');
    const main = feed.filter((item) => item.type === 'main');

    return (
        <div className={`${burgeringredient.content_width}`}>
            <TabsBurgerIngredients />
           
            <div className={`${burgeringredient.scroll}`}>
                <div className={`mt-10`}>
                    <h2>Бургеры</h2>
                    <div className={`flex flex-wrap`}>
                        {bun.map((item) => {
                            return (
                                <CardBurgerIngredient  key={item._id} {...item} />
                            );
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                       {sauce.map((item) => {
                           return (<CardBurgerIngredient key={item._id} {...item} />);
                       })} 
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Начинки</h2>
                    <div className={`flex flex-wrap`}>
                       {main.map((item) => {
                           return (<CardBurgerIngredient key={item._id} {...item} />);
                       })}
                    </div>
                </div>
            </div>

        </div>
    );
}

BurgerIngredients.propTypes = {
    ingredients : PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default BurgerIngredients;
