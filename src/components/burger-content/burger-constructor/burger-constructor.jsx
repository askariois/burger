import OrderDetails from "../../order-details/order-details";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";

import burgerconstrucor from "./burger-construcor.module.css";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import { ADD_INGREDIENT } from "../../../services/actions/constructor-ingredients";

import ConstructorIngredientsList from "./burger-constructor-ingredient-list/burger-constructor-ingredient-list";

function BurgerConstructor() {
  const construcorIngredients = useSelector(
    (store) => store.construcorIngredient.constructorIngredients
  );

  const { feed } = useSelector((store) => store.ingredient);

  const dispatch = useDispatch();

  const moveItem = (payload) => {
    const ingredient = feed.filter((item) => item._id === payload._id);
    dispatch({
      type: ADD_INGREDIENT,
      payload: { ...ingredient[0], key: uuidv4() },
    });
  };

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(itemId) {
      moveItem(itemId);
    },
  });

  const bunTopBottom = construcorIngredients.filter((item) => {
    return item.type === "bun";
  });

  const ingredientsMiddle = construcorIngredients.filter((item) => {
    return item.type !== "bun";
  });

  return (
    <div
      className={`${burgerconstrucor.content_width} mt-25  mr-2`}
      ref={dropTarget}
    >
      <ConstructorIngredientsList
        bun={bunTopBottom}
        ingredients={ingredientsMiddle}
      />
      {construcorIngredients.length !== 0 && <OrderDetails />}
    </div>
  );
}

BurgerConstructor.propTypes = {
  construcorIngredients: PropTypes.arrayOf(PropTypes.object.isRequired),
  feed: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default BurgerConstructor;
