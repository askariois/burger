import React from 'react';
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import checkout from "./checkout.module.css";



function Checkout() {
    return (
        <div className={`mt-10`}>
            <div className={`flex justify-right align-center`}>
                <div className={`${checkout.checkout_sum} mr-10`}>
                    <span className={`mr-2`}>610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default Checkout;
