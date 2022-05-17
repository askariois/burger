import { refreshToken, userData, userUpdate } from "../../utils/api";
import { checkResponse, setCookie } from "../../utils/utils";

export const PROFILE_ADD = "PROFILE/ADD";
export const PROFILE_SUCCESS = "PROFILE/SUCCESS";
export const PROFILE_FAILED = "PROFILE/FAILED";

export const PROFILE_UPDATE = "PROFILE_UPDATE";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE/SUCCESS";
export const PROFILE_UPDATE_FAILED = "PROFILE_UPDATE/FAILED";

export function userGetData() {
  return async function (dispatch) {
    dispatch({
      type: PROFILE_ADD,
    });
    await userData()
      .then(checkResponse)
      .then((res) => {
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
      .then(checkResponse)
      .then((json) => {
        localStorage.setItem("refreshToken", json.refreshToken);
        setCookie("accessToken", json.accessToken);
        dispatch(afterRefresh);
      })
      .catch((err) => {
        console.log("Error");
      });
  };
}

export function userUpdateData(name, email, pass) {
  return async function (dispatch) {
    dispatch({
      type: PROFILE_UPDATE,
    });
    await userUpdate(name, email, pass)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: PROFILE_UPDATE_SUCCESS,
            newdata: res.user,
          });
        } else {
          dispatch({
            type: PROFILE_UPDATE_FAILED,
          });
        }
      })
      .catch((err) => {
        console.log("Error");
        dispatch(userRefreshData(userGetData()));
      });
  };
}
