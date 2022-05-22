import {
  LOGIN_ADD,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_EMAIL,
  LOGIN_PASSWORD,
} from "../actions/login";
import { TReduxLogin } from "../types/login-reducer";

const initialState = {
  loginRequest: false,
  loginFailed: false,
  loginSuccess: false,
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action: TReduxLogin) => {
  switch (action.type) {
    case LOGIN_ADD: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccess: action.success,
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...initialState,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case LOGIN_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case LOGIN_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
