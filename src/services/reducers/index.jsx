
import { GET_FEED , GET_FEED_FAILED , GET_FEED_SUCCESS , ADD_BURGER_CONSTRUCTOR } from "../actions/index";

const initialState = {
   feedRequest: false,
   feedFailed: false,
   feed: [],

   constructorBurger: [],
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

      case ADD_BURGER_CONSTRUCTOR: {      
         return {
           ...state,
           constructorBurger: [...state.constructorBurger, ...state.feed.filter(item => item._id === action._id)]
         };
       }

      default: {
         return state
      }
   }
} 