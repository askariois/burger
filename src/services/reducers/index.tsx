import { GET_FEED, GET_FEED_FAILED, GET_FEED_SUCCESS } from "../actions/index";
import { TReduxIndex } from "../types/index-reducer";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
};

export const ingredientsReducer = (state = initialState, action: TReduxIndex) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: false,
        feedFailed: false,
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        feed: action.feed,
        feedRequest: true,
      };
    }
    case GET_FEED_FAILED: {
      return {
        ...initialState,
        feedFailed: true,
        feedRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
