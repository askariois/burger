import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENTS,
  RESET_INGREDIENTS,
  UPDATE_CONSTRUCTOR_LIST,
} from "../actions/constructor-ingredients";

const initialState = {
  constructorIngredients: [],
};

export const constructorIngredients = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        const filtered = [...state.constructorIngredients].filter(
          (item) => item.type !== "bun"
        );

        return {
          ...state,
          constructorIngredients: [...filtered, action.payload],
        };
      }

      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients,
          action.payload,
        ],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [...state.constructorIngredients].filter(
          (item) => item.key !== action.id
        ),
      };
    }
    case UPDATE_CONSTRUCTOR_LIST: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
