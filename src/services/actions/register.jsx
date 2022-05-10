import { registerData } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const REGISTER_ADD = "REGISTER/ADD";
export const REGISTER_SUCCESS = "REGISTER/SUCCESS";
export const REGISTER_FAILED = "REGISTER/FAILED";
export const REGISTER_NAME = "REGISTER/NAME";
export const REGISTER_EMAIL = "REGISTER/EMAIL";
export const REGISTER_PASSWORD = "REGISTER/PASSWORD";

export function registerUser(name, email, password) {
  return function (dispatch) {
    dispatch({
      type: REGISTER_ADD,
    });

    registerData(name, email, password)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({
            type: REGISTER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };
}
