import {
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_CODE,
  RESET_PASSWORD_PASSWORD,
} from "../actions/reset-password";

const initialState = {
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  resetPasswordSuccess: false,
  resetPassword: "",
  password: "",
  code: "",
};

export const resetPasswordReducer = (state = initialState, action) => {
  action.type;
  switch (action.type) {
    case RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordSuccess: true,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...initialState,
        resetPasswordFailed: true,
        resetPasswordRequest: false,
      };
    }
    case RESET_PASSWORD_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case RESET_PASSWORD_CODE: {
      return {
        ...state,
        code: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
