import OrderDetails from "../../order-details/order-details";
import { useDrop } from "react-dnd";

import burgerconstrucor from "./burger-construcor.module.css";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { ADD_INGREDIENT } from "../../../services/actions/constructor-ingredients";
import ConstructorIngredientsList from "./burger-constructor-ingredient-list/burger-constructor-ingredient-list";

import OrderPriceButton from "../../order-details/order-buttton-price/order-button-price";

function BurgerConstructor() {
  interface constructorIngredients {
    constructorIngredients: {}[];
  }

  const constructorIngredients = useSelector(
    (store: constructorIngredients) =>
      store.constructorIngredients.constructorIngredients
  );

  console.log(constructorIngredients);

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

  const bunTopBottom = constructorIngredients.filter((item) => {
    return item.type === "bun";
  });

  const ingredientsMiddle = constructorIngredients.filter((item) => {
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

      {constructorIngredients.length !== 0 && <OrderPriceButton />}
    </div>
  );
}

export default BurgerConstructor;
