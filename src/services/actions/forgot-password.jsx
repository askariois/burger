import { forgotPassword } from "../../utils/api";

export const EMAIL_FOTGOT_PASSOWORD = "EMAIL_FOTGOT_PASSOWORD";
export const POST_FORGOT_PASSWORD = "POST_FORGOT_PASSWORD";
export const POST_FORGOT_PASSWORD_SUCCESS = "POST_FORGOT_PASSWORD_SUCCESS";
export const POST_FORGOT_PASSWORD_FAILED = "POST_FORGOT_PASSWORD_FAILED";

export function postPasswordForgot(email) {
  return function (dispatch) {
    dispatch({
      type: POST_FORGOT_PASSWORD,
    });

    forgotPassword(email)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Error");
        }
      })
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
