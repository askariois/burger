import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENTS,
  RESET_INGREDIENTS,
  UPDATE_CONSTRUCTOR_LIST,
} from "../actions/constructor-ingredients";

const initialState = {
  ingredients: [],
};

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        const filtered = [...state.ingredients].filter(
          (item) => item.type !== "bun"
        );

        return {
          ...state,
          ingredients: [...filtered, action.payload],
        };
      }

      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter(
          (item) => item.key !== action.id
        ),
      };
    }
    case UPDATE_CONSTRUCTOR_LIST: {
      return {
        ...state,
        ingredients: [...action.optional],
      };
    }
    default: {
      return state;
    }
  }
};
