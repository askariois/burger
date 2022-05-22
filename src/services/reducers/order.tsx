import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_SUCCESS,
} from "../actions/order";
import { TReduxOrder } from "../types/order-reducer";

const initialState = {
  orderRequest: false,
  orderFailed: false,
  order: "",
};

export const orderReducer = (state = initialState, action: TReduxOrder) => {
  switch (action.type) {
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        orderRequest: false,
      };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return {
        ...initialState,
        orderFailed: true,
        orderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
