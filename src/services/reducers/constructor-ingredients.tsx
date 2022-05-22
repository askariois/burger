import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_CONSTRUCTOR_LIST,
} from "../actions/constructor-ingredients";
import { TReduxIngredient } from "../types/constructor-reducer";
import { IFeed } from "../types/burger-constructor";

const initialState = {
  ingredients: [],
};

export const constructorIngredients = (state = initialState, action: TReduxIngredient) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === "bun") {
        const filtered = [...state.ingredients].filter(
          (item: IFeed) => item.type !== "bun"
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
          (item: IFeed) => item.key !== action.id
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
