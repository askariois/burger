import { checkResponse } from "../../utils/utils";

export const GET_FEED = "GET_FEED";
export const GET_FEED_FAILED = "GET_FEED_FAILED";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";

export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";

export function loadIngredients() {
  return async function (dispatch: any) {
    dispatch({
      type: GET_FEED,
    });
    await fetch("https://norma.nomoreparties.space/api/ingredients")
      .then(checkResponse)
      .then((data) => {
        if (data && data.success) {
          dispatch({ type: GET_FEED_SUCCESS, feed: data.data });
        } else {
          dispatch({ type: GET_FEED_FAILED });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_FEED_FAILED,
        });
      });
  };
}
