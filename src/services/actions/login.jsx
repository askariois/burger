import { loginData, logoutData } from "../../utils/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/utils";

export const LOGIN_ADD = "LOGIN/ADD";
export const LOGIN_SUCCESS = "LOGIN/SUCCESS";
export const LOGIN_FAILED = "LOGIN/FAILED";
export const LOGIN_EMAIL = "LOGIN/EMAIL";
export const LOGIN_PASSWORD = "LOGIN/PASSWORD";

export function loginUser(email, password) {
  return async function (dispatch) {
    dispatch({
      type: LOGIN_ADD,
    });

    await loginData(email, password)
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
          deleteCookie("accessToken");
          localStorage.removeItem("refreshToken");
          setCookie("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch({
            type: LOGIN_SUCCESS,
            success: res.success,
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

export function logoutUser() {
  return async function (dispatch) {
    await logoutData()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Error");
        }
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Ошибка");
      });
  };
}
