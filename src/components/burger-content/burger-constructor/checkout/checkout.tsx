import React from 'react';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import checkout from "./checkout.module.css";
import Modal from '../../../modal/modal';

import done from "../../../../images/done.svg";


function Checkout() {
    const [state, setState] = React.useState({ visible: false });

    const handleCloseModal = (e: any) => {
        setState({ visible: false });
        document.body.style.overflow = 'auto';
    }

    const handleOpenModal = () => {
        setState({ visible: true });
        document.body.style.overflow = 'hidden';
    }
    const modal = <Modal close={handleCloseModal}>
        <div className={checkout.modal}>
            <h1>034536</h1>
            <p className='mt-8 mb-15'>идентификатор заказа</p>
            <div className='flex justify-center'>
                <img src={done} alt="" />
            </div>
            <span className={`mt-15`}>Ваш заказ начали готовить</span>
            <span className={`${checkout.pedding} mt-2`}>Дождитесь готовности на орбитальной станции</span>
        </div>
    </Modal>;
    return (
        <div className={`mt-10`}>
            <div className={`${checkout.flex}`}>
                <div className={`${checkout.checkout_sum} mr-10`}>
                    <span className={`mr-2`}>610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={handleOpenModal}>
                    <a className={checkout.text_white}> Оформить заказ</a>
                </Button>
            </div>
            {state.visible && modal}
        </div>

    );
}

export default Checkout;
