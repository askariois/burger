import { combineReducers } from "redux";
import { constructorIngredients } from "./constructor-ingredients";
import { forgotPasswordReducer } from "./forgot-password";
import { ingredientsReducer } from "./index";
import { modalReducer } from "./item-to-view";
import { loginReducer } from "./login";
import { orderReducer } from "./order";
import { registerReducer } from "./register";
import { resetPasswordReducer } from "./reset-password";

export const rootReducer = combineReducers({
  ingredient: ingredientsReducer,
  constructorIngredients: constructorIngredients,
  order: orderReducer,
  modalWindows: modalReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  registerUser: registerReducer,
  loginUser: loginReducer,
});
