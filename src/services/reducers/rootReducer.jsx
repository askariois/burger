import { combineReducers } from "redux";
import { constructorIngredients } from "./constructor-ingredients";
import { ingredientsReducer } from "./index";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  ingredient: ingredientsReducer,
  constructorIngredients: constructorIngredients,
  order: orderReducer,
});
