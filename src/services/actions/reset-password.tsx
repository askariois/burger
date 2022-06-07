import { passwordReset } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const RESET_PASSWORD_PASSWORD = "RESET_PASSWORD_PASSWORD";
export const RESET_PASSWORD_CODE = "RESET_PASSWORD_CODE";

export function resetPasswordRequest(password: string, code: string) {
  return function (dispatch: any) {
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
