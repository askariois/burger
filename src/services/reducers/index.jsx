import { GET_FEED , GET_FEED_FAILED , GET_FEED_SUCCESS , BUN_INGREDIENTS , SAUCE_INGREDIENTS , MAIN_INGREDIENTS } from "../actions/index";

const initialState = {
   feedRequest: false,
   feedFailed: false,
   feed: [],

   bun: [],
   sauce: [],
   main: [],
}

export const ingredientsReducer = (state = initialState, action) => {
   // console.log('ingredients reducer >>>' , action);
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
            feedRequest: false
         };
      }
      case GET_FEED_FAILED: {
         return {
            ...state,
            feedFailed: true,
            feedRequest: false
         };
      }
      case BUN_INGREDIENTS:{
         return {
            ...state,
            bun: [...state.feed].filter((item) => {
                return item.type === 'bun';
            }),
         };
      }
      case SAUCE_INGREDIENTS:{
         return {
            ...state,
            sauce: [...state.feed].filter((item) => {
                return item.type === 'sauce';
            }),
         };
      }

      case MAIN_INGREDIENTS:{
         return {
            ...state,
            main: [...state.feed].filter((item) => {
                return item.type === 'main';
            }),
         };
      }
      default: {
         return state
      }
   }
} 