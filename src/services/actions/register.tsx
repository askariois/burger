import { registerData } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const REGISTER_ADD = "REGISTER_ADD";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_NAME = "REGISTER_NAME";
export const REGISTER_EMAIL = "REGISTER_EMAIL";
export const REGISTER_PASSWORD = "REGISTER_PASSWORD";

export function registerUser(name: string, email: string, password: string) {
  return function (dispatch: any) {
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
