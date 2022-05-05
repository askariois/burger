import { refreshToken, userData } from "../../utils/api";
import { setCookie } from "../../utils/utils";

export const PROFILE_ADD = "PROFILE/ADD";
export const PROFILE_SUCCESS = "PROFILE/SUCCESS";
export const PROFILE_FAILED = "PROFILE/FAILED";

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
          dispatch(userRefreshData(userGetData()));
        }
      })
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
      });
  };
}

function userRefreshData(afterRefresh) {
  return async function (dispatch) {
    await refreshToken().then((res) => {
      console.log(res);
      // localStorage.setItem("refreshToken", res.refreshToken);
      // setCookie("accessToken", res.accessToken);
      // dispatch(afterRefresh);
    });
  };
}
