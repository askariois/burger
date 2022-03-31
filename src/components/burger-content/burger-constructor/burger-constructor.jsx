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
import { ADD_INGREDIENT } from "../../../services/actions/constructor-ingredients";

function BurgerConstructor() {
  const { construcorIngredient } = useSelector(
    (state) => state.construcorIngredient.constructorIngredients
  );

  console.log(construcorIngredient);
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: "ingredients",
    drop(itemId) {
      dispatch({
        type: ADD_INGREDIENT,
      });
    },
  });

  return (
    <div
      className={`${burgerconstrucor.content_width} mt-25  mr-2`}
      ref={dropTarget}
    >
      <div className="flex align-end  flex-col">
        {/* {contructorBurger.map((item) => {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`} key={item._id}> <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${item.name} (верх)`}
                                price={item.price}
                                thumbnail={item.image}
                            /></div>
                        );
                })} */}

        {/*  <div className={`${burgerconstrucor.scroll}`}>
                    {ingredientsMiddle.map((item) => {
                            return (
                                <div className='mt-4 mb-4 flex align-center' key={item._id}>
                                    <DragIcon type="primary" />
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.image}
                                    />
                                    </div>
                            );
                    })}
                </div>
                {bunTopBottom.map((item) => {
                        return (
                            <div className={`mt-4 mb-4 ${burgerconstrucor.mr_12}`}
                                key={item._id}> <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${item.name} (низ)`}
                                    price={item.price}
                                    thumbnail={item.image}
                                /></div>
                        );
                })} */}
      </div>
      {/* <OrderDetails /> */}
    </div>
  );
}

// BurgerConstructor.propTypes = {
//     ingredients : PropTypes.arrayOf(PropTypes.object.isRequired),
// };

export default BurgerConstructor;
