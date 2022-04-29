import { combineReducers } from "redux";
import { constructorIngredients } from "./constructor-ingredients";
import { forgotPasswordReducer } from "./forgot-password";
import { ingredientsReducer } from "./index";
import { modalReducer } from "./item-to-view";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
  ingredient: ingredientsReducer,
  constructorIngredients: constructorIngredients,
  order: orderReducer,
  modalWindows: modalReducer,
  forgotPassword: forgotPasswordReducer,
});
