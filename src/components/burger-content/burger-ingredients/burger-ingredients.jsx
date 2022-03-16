import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import TabsBurgerIngredients from './tabs-burger-ingredients/tabs-burger-ingredients';
import CardBurgerIngredient from './card-burger-ingredient/card-burger-ingredients';

import { useDispatch, useSelector } from 'react-redux';
import {ingredientLoad , BUN_INGREDIENTS} from '../../../services/actions';

import burgeringredient from "./burger-ingredient.module.css";



function BurgerIngredients() {

    const { feed , bun } = useSelector(state => state.ingredient);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ingredientLoad());
    }, []);


    useEffect(() => {
        dispatch({type: BUN_INGREDIENTS});
    }, []);

    // const bun = feed.data.filter((item) => {
    //     return item.type === 'bun';
    // });
    //
    // const sauce = feed.data.filter((item) => {
    //     return item.type === 'sauce';
    // });
    //
    //
    // const main = feed.data.filter((item) => {
    //     return item.type === 'main';
    // });

    return (
        <div className={`${burgeringredient.content_width}`}>
            <TabsBurgerIngredients />
            <div className={`${burgeringredient.scroll}`}>
                <div className={`mt-10`}>
                    <h2>Бургеры</h2>
                    <div className={`flex flex-wrap`}>
                        {bun.map((item) => {
                            return (
                                <CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />
                            );
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                        {/*{sauce.map((item) => {*/}
                        {/*    return (<CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />);*/}
                        {/*})}*/}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Начинки</h2>
                    <div className={`flex flex-wrap`}>
                        {/*{main.map((item) => {*/}
                        {/*    return (<CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />);*/}
                        {/*})}*/}
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
