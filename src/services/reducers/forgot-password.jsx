import {
  POST_FORGOT_PASSWORD,
  POST_FORGOT_PASSWORD_SUCCESS,
  POST_FORGOT_PASSWORD_FAILED,
  EMAIL_FOTGOT_PASSOWORD,
} from "../actions/forgot-password";

const initialState = {
  postForgotRequest: false,
  postForgotFailed: false,
  postForgot: "",
  email: "",
};

export const forgotPasswordReducer = (state = initialState, action) => {
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
