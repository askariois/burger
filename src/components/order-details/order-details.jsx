import React from 'react';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from '../modal/modal';
import TotalPrice from './total-price/total-price';
import { baseUrl } from '../../constants/global';

import order_details from "./order-details.module.css";
import done from "../../images/done.svg";




function OrderDetails(props) {
    const URL_ORDER = `${baseUrl}orders`;


    const mainOrder = [...props.bun , ...props.ingredients];
    const mainOrderAll = [];
    mainOrder.map(item => mainOrderAll.push(`${item._id}`))


    const [order, setOrder] = React.useState('');

    const [isModalShown, setIsModalShown] = React.useState(false);
     
    const handleCloseModal = () => {
            setIsModalShown(false);
    }

    const handleOpenModal = () => {     
         
            const getOrderData = async () => {
                try {
                    const res = await fetch(URL_ORDER , {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify({"ingredients" : mainOrderAll})
                      });
                    const data = await res.json();
                    setOrder(data.order.number);
                } catch (error) {
                    console.error("Ошибка:", error);
                }
            }

            getOrderData();

        setIsModalShown(true);

    }

    return (
        <div className='mt-10'>
            <div className={order_details.flex}>
                <div className={`${order_details.checkout_sum} mr-10`}>
                    <TotalPrice bun={props.bun} ingredients={props.ingredients}/>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="large" onClick={handleOpenModal}>
                    <a className={order_details.text_white}> Оформить заказ</a>
                </Button>
            </div>
            {isModalShown && <Modal close={handleCloseModal}>
                <div className={order_details.modal}  id="overlayModal">
                    <h1>{order}</h1>
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
