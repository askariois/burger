import {
   BUN_TOP_BOTTOM,
   INGREDIENT_MIDDLE,
   ADD_BURGER_INGREDIENT,
   DELETE_BURGER_INGREDIENT,
   ADD_BURGER_CONSTRUCTOR,
   DELETE_BURGER_CONSTRUCTOR,
 } from '../actions/constructor-ingredients';

 
 const initialState = {
   items: [],
   constructorBurger: [],

   bunConstructor: [],
   ingredientsConstructor:[],

 };
 
 export const constructorIngredients = (state = initialState, action) => {
   console.log(state.constructorBurger);
   switch (action.type) {



    //  case DELETE_BURGER_CONSTRUCTOR: {
    //   return {
    //     ...state,
    //     items: [...state.items, ...state.contructor.filter(item => item.id === action.id)]
    //   };
    // }

     case ADD_BURGER_CONSTRUCTOR: {      
      return {
        ...state,
        constructorBurger: [...state.constructorBurger, ...state.items.filter(item => item.id === action.id)]
      };
    }


      // case DELETE_BURGER_INGREDIENT: {
      //   return { ...state, items: [...state.items].filter(item => item.id !== action.id) };
      // }

      // case ADD_BURGER_INGREDIENT: {
      //   return {
      //     ...state,
      //     items: [...state.items, ...state.contructor.filter(item => item.id === action.id)]
      //   };
      // }

     default: {
       return state;
     }
   }
 };