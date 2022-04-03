import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import OrderDetails from "../../order-details/order-details";
import { useDrop } from "react-dnd";

import burgerconstrucor from "./burger-construcor.module.css";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../../../services/actions/constructor-ingredients";

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
      payload: ingredient[0],
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

  const onDelete = (item) => {
    dispatch({
      type: DELETE_INGREDIENT,
      item,
    });
  };

  return (
    <div
      className={`${burgerconstrucor.content_width} mt-25  mr-2`}
      ref={dropTarget}
    >
      <div className="flex align-end  flex-col">
        {bunTopBottom.map((item) => {
          return (
            <div
              className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`}
              key={item._id}
            >
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${item.name} (верх)`}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          );
        })}

        {ingredientsMiddle.length !== 0 && (
          <div className={`${burgerconstrucor.scroll}`}>
            {ingredientsMiddle.map((item, index) => {
              return (
                <div className="mt-4 mb-4 flex align-center" key={index}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    handleClose={onDelete(item._id)}
                    thumbnail={item.image}
                  />
                </div>
              );
            })}
          </div>
        )}

        {bunTopBottom.map((item) => {
          return (
            <div
              className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`}
              key={item._id}
            >
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${item.name} (низ)`}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          );
        })}
      </div>
      <OrderDetails />
    </div>
  );
}

// BurgerConstructor.propTypes = {
//     ingredients : PropTypes.arrayOf(PropTypes.object.isRequired),
// };

export default BurgerConstructor;
