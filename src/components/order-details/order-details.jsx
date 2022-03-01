import React from 'react';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from '../modal/modal';

import order_details from "./order-details.module.css";

import done from "../../images/done.svg";


function OrderDetails() {
    const [isModalShown, setIsModalShown] = React.useState(false);

    const handleCloseModal = () => {
        setIsModalShown(false);
    }

    const handleOpenModal = () => {
        setIsModalShown(true);
    }

    return (
        <div className='mt-10'>
            <div className={order_details.flex}>
                <div className={`${order_details.checkout_sum} mr-10`}>
                    <span className='mr-2'>610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={handleOpenModal}>
                    <a className={order_details.text_white}> Оформить заказ</a>
                </Button>
            </div>
            {isModalShown && <Modal close={handleCloseModal}>
                <div className={order_details.modal}>
                    <h1>034536</h1>
                    <p className='mt-8 mb-15'>идентификатор заказа</p>
                    <div className='flex justify-center'>
                        <img src={done} alt="" />
                    </div>
                    <span className='mt-15'>Ваш заказ начали готовить</span>
                    <span className={`${order_details.pending} mt-2`}>Дождитесь готовности на орбитальной станции</span>
                </div>
            </Modal>}
        </div>

    );
}


export default OrderDetails;
