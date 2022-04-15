import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import TotalPrice from "../total-price/total-price";
import Modal from "../../modal/modal";

import order_details from "../order-details.module.css";
import OrderDetails from "../order-details";
import { useDispatch, useSelector } from "react-redux";
import { getNumber } from "../../../services/actions/order";

import {
  CLOSE_MODAL_ORDER,
  OPEN_MODAL_ORDER,
} from "../../../services/actions/item-to-view";

function OrderPriceButton() {
  const dispatch = useDispatch();

  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients.constructorIngredients
  );

  const mainOrderAll = [];

  constructorIngredients.map((item) => mainOrderAll.push(`${item._id}`));

  const isModalShownOrder = useSelector((store) => store.modalWindows);

  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MODAL_ORDER,
      modalOrder: false,
    });
  };

  const handleOpenModal = () => {
    dispatch(getNumber(mainOrderAll));
    dispatch({
      type: OPEN_MODAL_ORDER,
      modalOrder: true,
    });
  };
  return (
    <div className={`${order_details.flex} mt-10`}>
      <div
        className={`${order_details.checkout_sum} mr-10 ${order_details.flex}`}
      >
        <TotalPrice />
        <CurrencyIcon type="primary" />
      </div>
      <Button type="primary" size="large" onClick={handleOpenModal}>
        <a className={order_details.text_white}> Оформить заказ</a>
      </Button>
      {isModalShownOrder.modalOrder && (
        <Modal close={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
  
export default OrderPriceButton;
