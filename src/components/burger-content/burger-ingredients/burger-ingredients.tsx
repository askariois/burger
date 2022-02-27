import React from 'react';
import burgeringredient from "./burger-ingredient.module.css";
import TabsBurgerIngredients from './tabs-burger-ingredients/tabs-burger-ingredients';
import CardBurgerIngredient from './card-burger-ingredient/card-burger-ingredients';
import PropTypes from 'prop-types';


function BurgerIngredients(props: any) {
    return (
        <div className={`${burgeringredient.content_width}`}>
            <TabsBurgerIngredients />
            <div className={`${burgeringredient.scroll}`}>
                <div className={`mt-10`}>
                    <h2>Бургеры</h2>
                    <div className={`flex flex-wrap`}>
                        {props.card.map((item: any) => {
                            if (item.type === 'bun') {
                                return (<CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={item._id} />);
                            }
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                        {props.card.map((item: any) => {
                            if (item.type === 'sauce') {
                                return (<CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={item._id} />);
                            }
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Начинки</h2>
                    <div className={`flex flex-wrap`}>
                        {props.card.map((item: any) => {
                            if (item.type === 'main') {
                                return (<CardBurgerIngredient title="Бургер" image={item.image} name={item.name} price={item.price} key={item._id} />);
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

BurgerIngredients.propTypes = {
    card: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default BurgerIngredients;
