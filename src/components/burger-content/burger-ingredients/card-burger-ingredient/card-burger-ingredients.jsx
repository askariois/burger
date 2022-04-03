import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import Modal from "../../../modal/modal";
import IngredientDetails from "../../../ingredient-details/ingredient-details";
import { useDrag } from "react-dnd";
import burgeringredient from "../burger-ingredient.module.css";
import { useSelector } from "react-redux";

const CardBurgerIngredient = ({
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
}) => {
  const [isModalShown, setIsModalShown] = React.useState(false);

  const handleCloseModal = (e) => {
    setIsModalShown(false);
  };

  const handleOpenModal = () => {
    setIsModalShown(true);
  };

  const [, dragRef] = useDrag({
    type: "ingredients",
    item: { _id },
  });

  const construcorIngredients = useSelector(
    (store) => store.construcorIngredient.constructorIngredients
  );
  const couterData = construcorIngredients.filter((item) => item._id === _id);
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
          <span className={`${burgeringredient.burger_counter} mt-1`}>
            {price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${burgeringredient.burger_name} mt-1`}>{name}</div>
      </div>
      {isModalShown && (
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
};

CardBurgerIngredient.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
};

export default CardBurgerIngredient;
