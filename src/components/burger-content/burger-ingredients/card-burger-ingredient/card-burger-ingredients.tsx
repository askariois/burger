import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";

import burgeringredient from "../burger-ingredient.module.css";
import { OPEN_MODAL } from "../../../../services/actions/item-to-view";
import { IFeed } from "../../../../services/types/burger-constructor";
import { TRootState } from "../../../../services/types/redux";

function CardBurgerIngredient({ type, image, price, name, _id }: { type: string, image: string, price: number, name: string, _id: string }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleOpenModal = () => {
    dispatch({
      type: OPEN_MODAL,
      modal: true,
      id: _id,
    });
  };

  const [, dragRef] = useDrag({
    type: "ingredients",
    item: { _id },
  });

  const constructorIngredients: IFeed[] = useSelector(
    (store: TRootState) => store.constructorIngredients["ingredients"]
  );
  const couterData = constructorIngredients.filter((item) => item._id === _id);
  const couterDataCount = couterData.length;

  return (
    <Link
      key={_id}
      to={{
        pathname: `/ingredients/${_id}`,
        state: { background: location },
      }}
      className={`${burgeringredient.cursor_pointer} w-6-12 mb-8`}
      ref={dragRef}
      onClick={handleOpenModal}
    >
      <div className={`relative flex justify-center`}>
        <img src={image} alt="Грустная собачка" />
        <Counter
          count={type === "bun" ? couterDataCount * 2 : couterDataCount}
          size="default"
        />
      </div>
      <div className={`flex justify-center align-center`}>
        <span className={burgeringredient.burger_counter}>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${burgeringredient.burger_name} mt-1`}>{name}</div>
    </Link>
  );
}

export default CardBurgerIngredient;
