import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_CONSTRUCTOR_LIST } from "../../../../services/actions/constructor-ingredients";

import burgerconstrucor from "../burger-construcor.module.css";
import OrderedIngredient from "../burger-constructor-ordered-ingredient/burger-constructor-ordered-ingredient";

function ConstructorIngredientsList({ bun, ingredients }) {
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients, ...bun];

      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch({
        type: UPDATE_CONSTRUCTOR_LIST,
        optional: newCards,
      });
    },
    [ingredients, dispatch]
  );

  return (
    <div className="flex align-end  flex-col">
      {bun.map((item) => {
        return (
          <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}>
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
      {ingredients.length !== 0 && (
        <div className={`${burgerconstrucor.scroll}`}>
          {ingredients.map((item, index) => {
            return (
              <OrderedIngredient
                index={index}
                item={item}
                moveCard={moveCard}
              />
            );
          })}
        </div>
      )}
      {bun.map((item) => {
        return (
          <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}>
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
  );
}

ConstructorIngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object.isRequired),
  bun: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default ConstructorIngredientsList;
