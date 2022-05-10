import order_details from "./order-details.module.css";
import done from "../../images/done.svg";
import { useSelector } from "react-redux";

function OrderDetails() {
  const { order } = useSelector((store) => store.order);

  return (
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
  );
}

export default OrderDetails;
