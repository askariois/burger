import {
  POST_FORGOT_PASSWORD,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
  EMAIL_FOTGOT_PASSOWORD,
} from "../actions/forgot-password";
import { TReduxForgot } from "../types/forgot-reducer";

const initialState = {
  postForgotRequest: false,
  postForgotFailed: false,
  postForgotSuccess: false,
  postForgot: "",
  email: "",
};

export const forgotPasswordReducer = (state = initialState, action:TReduxForgot) => {
  switch (action.type) {
    case EMAIL_FOTGOT_PASSOWORD: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case POST_FORGOT_PASSWORD: {
      return {
        ...state,
        postForgotRequest: true,
        postForgotFailed: false,
        postForgotSuccess: true,
      };
    }
    case POST_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        postForgotRequest: false,
      };
    }
    case POST_FORGOT_PASSWORD_FAILED: {
      return {
        ...initialState,
        postForgotFailed: true,
        postForgotRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
