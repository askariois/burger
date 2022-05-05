import {
  PROFILE_ADD,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
} from "../actions/profile";

const initialState = {
  loginGetData: false,
  loginGetDataFailed: false,
  loginGetDataRequest: false,
  data: [],
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
