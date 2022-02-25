import React from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import checkout from "./checkout.module.css";



function Checkout() {
    return (
        <div className={`mt-10`}>
            <div className={`${checkout.flex}`}>
                <div className={`${checkout.checkout_sum} mr-10`}>
                    <span className={`mr-2`}>610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large">
                    <a href="#" className={checkout.text_white}> Оформить заказ</a>
                </Button>
            </div>
        </div>
    );
}

export default Checkout;
