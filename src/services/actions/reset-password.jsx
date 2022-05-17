import { passwordReset } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD/SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD/FAILED";
export const RESET_PASSWORD_PASSWORD = "RESET_PASSWORD/PASSWORD";
export const RESET_PASSWORD_CODE = "RESET_PASSWORD/CODE";

export function resetPasswordRequest(password, code) {
  return function (dispatch) {
    dispatch({
      type: RESET_PASSWORD,
    });

    passwordReset(password, code)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
      });
  };
}