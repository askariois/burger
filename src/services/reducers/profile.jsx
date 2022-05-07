import {
  PROFILE_ADD,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  PROFILE_NAME,
  PROFILE_EMAIL,
} from "../actions/profile";

const initialState = {
  loginGetData: false,
  loginGetDataFailed: false,
  loginGetDataRequest: false,
  data: {},
  newData: {},
};

export const loginDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ADD: {
      return {
        ...state,
        loginGetDataRequest: true,
        loginGetDataFailed: false,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loginGetDataFailed: false,
      };
    }
    case PROFILE_NAME: {
      return {
        ...state,
        newData: action.name,
      };
    }
    case PROFILE_EMAIL: {
      return {
        ...state,
        newData: { email: action.email },
      };
    }
    case PROFILE_FAILED: {
      return {
        ...initialState,
        loginGetDataFailed: true,
        loginGetDataRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
