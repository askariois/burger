import { getOrderNumber } from "../../utils/api";
import { checkResponse } from "../../utils/utils";

export const CREATE_ORDER = "CREATE_ORDER";
export const GET_ORDER_NUMBER = "GET_ORDER_NUMBER";
export const RESET_ORDER = "RESET_ORDER";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED = "GET_ORDER_NUMBER_FAILED";

export function getNumber(orderData: string[]) {
  return function (dispatch: any) {
    dispatch({
      type: GET_ORDER_NUMBER,
    });

    getOrderNumber(orderData)
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_NUMBER_SUCCESS,
            payload: res.order.number,
          });
        } else {
          dispatch({
            type: GET_ORDER_NUMBER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_NUMBER_FAILED,
        });
      });
  };
}
