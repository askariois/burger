import { loginData } from "../../utils/api";

export const LOGIN_ADD = "LOGIN/ADD";
export const LOGIN_SUCCESS = "LOGIN/SUCCESS";
export const LOGIN_FAILED = "LOGIN/FAILED";
export const LOGIN_EMAIL = "LOGIN/EMAIL";
export const LOGIN_PASSWORD = "LOGIN/PASSWORD";

export function loginUser(email, password) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_ADD,
    });

    loginData(email, password)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Error");
        }
      })
      .then((res) => {
        console.log(res);
        if (res && res.success) {
          console.log(res);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({
            type: LOGIN_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };
}
