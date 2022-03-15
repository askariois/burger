import { INGREDIENT_LOAD } from "../actions";

const initialState = {
   ingredients: [1]
}

export const ingredientsReducer = (state = initialState, action) => {
   console.log(action.type);
   switch (action.type) {
      case INGREDIENT_LOAD: {
         return {
            ...state,
            ingredients : action.data
         };
      }
      default: {
         return state   
      }
   }
} 