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

import burgeringredient from "../burger-ingredient.module.css";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../../../../services/actions/item-to-view";

function CardBurgerIngredient({
  type,
  image,
  price,
  name,
  image_large,
  calories,
  proteins,
  fat,
  carbohydrates,
  _id,
}) {
  const dispatch = useDispatch();
  const isModalIngredient = useSelector((store) => store.modalWindows);

  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MODAL,
      modal: false,
    });
  };

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
    (store) => store.constructorIngredients.constructorIngredients
  );
  const couterData = constructorIngredients.filter((item) => item._id === _id);
  const couterDataCount = couterData.length;

  return (
    <>
      <div
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
      </div>
      {isModalIngredient.modal && isModalIngredient.id === _id && (
        <Modal header="Детали ингредиента" close={handleCloseModal}>
          <IngredientDetails
            image={image_large}
            name={name}
            calories={calories}
            proteins={proteins}
            fat={fat}
            carbohydrates={carbohydrates}
          />
        </Modal>
      )}
    </>
  );
}

CardBurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CardBurgerIngredient;
