import { FC } from "react";
import { useDrop } from "react-dnd";

import burgerconstrucor from "./burger-construcor.module.css";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";
import { ADD_INGREDIENT } from "../../../services/actions/constructor-ingredients";
import ConstructorIngredientsList from "./burger-constructor-ingredient-list/burger-constructor-ingredient-list";

import OrderPriceButton from "../../order-details/order-buttton-price/order-button-price";
import { TRootState } from "../../../services/types/redux";
import { IFeed, IIngredients } from "../../../services/types/burger-constructor";


function BurgerConstructor() {
  const dispatch = useDispatch();
  const constructorIngredients: IFeed[] = useSelector((store: TRootState) => store.constructorIngredients['ingredients']);

  const { feed } = useSelector((store: IIngredients) => {
    return store.ingredient;
  });

  const moveItem = (payload: { _id: string }) => {
    const ingredient = feed.filter((item: IFeed) => item._id === payload._id);
    dispatch({
      type: ADD_INGREDIENT,
      payload: { ...ingredient[0], key: uuidv4() },
    });
  };

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(itemId: { _id: string }) {
      moveItem(itemId);
    },
  });

  const bunTopBottom = constructorIngredients.filter((item: IFeed) => {
    return item.type === "bun";
  });

  const ingredientsMiddle = constructorIngredients.filter((item: IFeed) => {
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
