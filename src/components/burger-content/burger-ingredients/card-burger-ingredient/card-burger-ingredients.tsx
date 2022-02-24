import React from 'react';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import burgeringredient from  "../burgeringredient.module.css";
import {Counter,CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const CardBurgerIngredient = (props:any) => {
    return (
        <>
            <div className={`w-6-12 mb-8`}>
                <div className={`relative flex justify-center`}>
                    <img src={props.image}  alt='Грустная собачка' />
                    <Counter count={2} size="default" />
                </div>
                <div className={`flex justify-center align-center`}>
                    <span className={`${burgeringredient.burger_counter} mt-1`}>{props.price}</span>
                    <CurrencyIcon type="primary" />
                </div>
                <div className={`${burgeringredient.burger_name} mt-1`}>
                    {props.name}
                </div>
            </div>
        </>
    );
}

export default CardBurgerIngredient;
