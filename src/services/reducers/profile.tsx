import {
  PROFILE_ADD,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
  PROFILE_UPDATE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILED,
} from "../actions/profile";
import { TReduxProfile } from "../types/profile-reducer";

const initialState = {
  loginGetData: false,
  loginGetDataFailed: false,
  loginGetDataRequest: false,
  data: {},
  profileUpdate: false,
  profileUpdateFailed: false,
  profileUpdateRequest: false,
  newData: {},
};

export const loginDataReducer = (state = initialState, action: TReduxProfile) => {
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
    case PROFILE_UPDATE: {
      return {
        ...state,
        profileUpdateRequest: true,
        profileUpdateFailed: false,
      };
    }
    case PROFILE_UPDATE_SUCCESS: {
      return {
        ...state,
        newData: action.newData,
        profileUpdateFailed: false,
      };
    }
    case PROFILE_UPDATE_FAILED: {
      return {
        ...initialState,
        profileUpdateFailed: true,
        profileUpdateRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
