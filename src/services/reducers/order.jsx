import {
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_SUCCESS,
} from "../actions/order";

const initialState = {
  orderRequest: false,
  orderFailed: false,
  order: "",
};

export const orderReducer = (state = initialState, action) => {
  console.log(action);
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
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
