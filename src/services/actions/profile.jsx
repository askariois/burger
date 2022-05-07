import { refreshToken, userData } from "../../utils/api";
import { setCookie } from "../../utils/utils";

export const PROFILE_ADD = "PROFILE/ADD";
export const PROFILE_SUCCESS = "PROFILE/SUCCESS";
export const PROFILE_FAILED = "PROFILE/FAILED";
export const PROFILE_NAME = "PROFILE/NAME";
export const PROFILE_EMAIL = "PROFILE/EMAIL";

export function userGetData() {
  return async function (dispatch) {
    dispatch({
      type: PROFILE_ADD,
    });
    await userData()
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
          dispatch({
            type: PROFILE_SUCCESS,
            data: res.user,
          });
        } else {
          dispatch({
            type: PROFILE_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log("Error");
        dispatch(userRefreshData(userGetData()));
      });
  };
}

function userRefreshData(afterRefresh) {
  return async function (dispatch) {
    await refreshToken()
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        localStorage.setItem("refreshToken", json.refreshToken);
        setCookie("accessToken", json.accessToken);
        dispatch(afterRefresh);
      });
  };
}
