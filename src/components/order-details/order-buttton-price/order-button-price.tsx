import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import TotalPrice from "../total-price/total-price";
import Modal from "../../modal/modal";
import { useHistory } from "react-router-dom";
import {
  CLOSE_MODAL_ORDER,
  OPEN_MODAL_ORDER,
} from "../../../services/actions/item-to-view";
import order_details from "../order-details.module.css";
import OrderDetails from "../order-details";
import { useDispatch, useSelector } from "react-redux";
import { getNumber } from "../../../services/actions/order";
import { TRootState } from "../../../services/types/redux";
import { IFeed } from "../../../services/types/burger-constructor";

function OrderPriceButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  const constructorIngredients: IFeed[] = useSelector(
    (store: TRootState) => store.constructorIngredients["ingredients"]
  );
  const userData = useSelector((store: TRootState) => store.loginData);

  let mainOrderAll: any = [];

  constructorIngredients.map((item) => mainOrderAll.push(`${item._id}`));

  const isModalShownOrder: { modal: boolean, modalOrder: boolean } = useSelector((store: TRootState) => store.modalWindows);



  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MODAL_ORDER,
      modalOrder: false,
    });
  };

  const handleOpenModal = () => {
    if (Object.keys(userData.data).length === 0) {
      history.push({
        pathname: "/login",
      });
      return;
    }
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
