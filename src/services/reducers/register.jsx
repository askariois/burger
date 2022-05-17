import {
  REGISTER_ADD,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_NAME,
  REGISTER_EMAIL,
  REGISTER_PASSWORD,
} from "../actions/register";

const initialState = {
  registerRequest: false,
  registerFailed: false,
  name: "",
  email: "",
  password: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_ADD: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...initialState,
        registerFailed: true,
        registerRequest: false,
      };
    }
    case REGISTER_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case REGISTER_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }

    case REGISTER_PASSWORD: {
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
