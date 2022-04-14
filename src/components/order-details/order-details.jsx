import React from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { getNumber } from "../../services/actions/order";

import Modal from "../modal/modal";
import TotalPrice from "./total-price/total-price";

import order_details from "./order-details.module.css";
import done from "../../images/done.svg";
import {
  CLOSE_MODAL,
  CLOSE_MODAL_ORDER,
} from "../../services/actions/item-to-view";

function OrderDetails() {
  const dispatch = useDispatch();

  const { order } = useSelector((store) => store.order);
  const isModalShownOrder = useSelector((store) => store.modalWindows);
  console.log(isModalShownOrder.modalOrder);
  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MODAL_ORDER,
      modalOrder: false,
    });
  };

  return (
    <>
      {isModalShownOrder.modalOrder && (
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
    </>
  );
}

OrderDetails.propTypes = {
  constructorIngredients: PropTypes.arrayOf(PropTypes.object.isRequired),
  order: PropTypes.number,
};

export default OrderDetails;
