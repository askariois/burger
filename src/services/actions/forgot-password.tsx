import { forgotPassword } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const EMAIL_FOTGOT_PASSOWORD = "EMAIL_FOTGOT_PASSOWORD";
export const POST_FORGOT_PASSWORD = "POST_FORGOT_PASSWORD";
export const POST_FORGOT_PASSWORD_SUCCESS = "POST_FORGOT_PASSWORD_SUCCESS";
export const POST_FORGOT_PASSWORD_FAILED = "POST_FORGOT_PASSWORD_FAILED";

export function postPasswordForgot(email: string) {
  return function (dispatch: any) {

    dispatch({
      type: POST_FORGOT_PASSWORD,
    });

    forgotPassword(email)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: POST_FORGOT_PASSWORD_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({
            type: POST_FORGOT_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: POST_FORGOT_PASSWORD_FAILED,
        });
      });
  };
}
