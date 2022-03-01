import React from 'react';

import TabsBurgerIngredients from './tabs-burger-ingredients/tabs-burger-ingredients';
import CardBurgerIngredient from './card-burger-ingredient/card-burger-ingredients';

import burgeringredient from "./burger-ingredient.module.css";



interface Props {
    card: {}[];
}

function BurgerIngredients(props: Props) {

    const bun = props.card.filter((item: any) => {
        return item.type === 'bun';
    });

    const sauce = props.card.filter((item: any) => {
        return item.type === 'sauce';
    });


    const main = props.card.filter((item: any) => {
        return item.type === 'main';
    });

    return (
        <div className={`${burgeringredient.content_width}`}>
            <TabsBurgerIngredients />
            <div className={`${burgeringredient.scroll}`}>
                <div className={`mt-10`}>
                    <h2>Бургеры</h2>
                    <div className={`flex flex-wrap`}>
                        {bun.map((item: any) => {
                            return (
                                <CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />
                            );
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Соусы</h2>
                    <div className={`flex flex-wrap`}>
                        {sauce.map((item: any) => {
                            return (<CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />);
                        })}
                    </div>
                </div>
                <div className={`mt-10`}>
                    <h2>Начинки</h2>
                    <div className={`flex flex-wrap`}>
                        {main.map((item: any) => {
                            return (<CardBurgerIngredient title="Бургер" image_large={item.image_large} image={item.image} name={item.name} price={item.price} key={item._id} calories={item.calories} proteins={item.proteins} fat={item.fat} carbohydrates={item.carbohydrates} />);
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}



export default BurgerIngredients;
