import { GET_FEED, GET_FEED_FAILED, GET_FEED_SUCCESS } from "../actions/index";

const initialState = {
  feedRequest: false,
  feedFailed: false,
  feed: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED: {
      return {
        ...state,
        feedRequest: true,
        feedFailed: false,
      };
    }
    case GET_FEED_SUCCESS: {
      return {
        ...state,
        feed: action.feed,
        feedRequest: false,
      };
    }
    case GET_FEED_FAILED: {
      return {
        state,
        feedFailed: true,
        feedRequest: false,
      };
    }

    default: {
      return state;
    }
  }
};
