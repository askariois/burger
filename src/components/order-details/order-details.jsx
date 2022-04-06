import React from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import TotalPrice from "./total-price/total-price";
import { baseUrl } from "../../constants/global";

import order_details from "./order-details.module.css";
import done from "../../images/done.svg";
import { useDispatch, useSelector } from "react-redux";
import { getNumber } from "../../services/actions/order";

function OrderDetails() {
  const dispatch = useDispatch();

  const construcorIngredients = useSelector(
    (store) => store.construcorIngredient.constructorIngredients
  );

  const { order } = useSelector((store) => store.order);

  const mainOrderAll = [];

  construcorIngredients.map((item) => mainOrderAll.push(`${item._id}`));

  const [isModalShown, setIsModalShown] = React.useState(false);

  const handleCloseModal = () => {
    setIsModalShown(false);
  };

  const handleOpenModal = () => {
    dispatch(getNumber(mainOrderAll));
    setIsModalShown(true);
  };

  return (
    <div className="mt-10">
      <div className={order_details.flex}>
        <div className={`${order_details.checkout_sum} mr-10`}>
          <TotalPrice />
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOpenModal}>
          <a className={order_details.text_white}> Оформить заказ</a>
        </Button>
      </div>
      {isModalShown && (
        <Modal close={handleCloseModal}>
          <div className={order_details.modal} id="overlayModal">
            <h1>{order}</h1>
            <p className="mt-8 mb-15">идентификатор заказа</p>
            <div className="flex justify-center">
              <img src={done} alt="" />
            </div>
            <span className="mt-15">Ваш заказ начали готовить</span>
            <span className={`${order_details.pending} mt-2`}>
              Дождитесь готовности на орбитальной станции
            </span>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default OrderDetails;
