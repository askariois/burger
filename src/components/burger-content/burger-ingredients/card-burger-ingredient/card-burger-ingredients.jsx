import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import Modal from "../../../modal/modal";
import IngredientDetails from "../../../ingredient-details/ingredient-details";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";

import burgeringredient from "../burger-ingredient.module.css";
import { OPEN_MODAL } from "../../../../services/actions/item-to-view";

function CardBurgerIngredient({ type, image, price, name, _id }) {
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

  const constructorIngredients = useSelector(
    (store) => store.constructorIngredients.ingredients
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

CardBurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CardBurgerIngredient;
