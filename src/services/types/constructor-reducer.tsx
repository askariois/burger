import { IFeed } from "./burger-constructor";

export interface IADD_INGREDIENT {
   type: 'ADD_INGREDIENT';
   payload: IFeed
}

export interface IDELETE_INGREDIENT {
   type: 'DELETE_INGREDIENT';
   id: string;
   ingredients: IFeed
}

export interface UPDATE_CONSTRUCTOR_LIST {
   type: 'UPDATE_CONSTRUCTOR_LIST';
   optional: IFeed[]
}


export type TReduxIngredient = IADD_INGREDIENT | IDELETE_INGREDIENT | UPDATE_CONSTRUCTOR_LIST;
