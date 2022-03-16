import {
   BUN_TOP_BOTTOM,
   INGREDIENT_MIDDLE,
 } from '../actions/constructor-ingredients';

 
 const initialState = {

   bunConstructor: [],
   ingredientsConstructor:[],

 };
 
 export const constructor_ingredients = (state = initialState, action) => {
   switch (action.type) {
     case BUN_TOP_BOTTOM: {
       return {
         ...state,
        
       };
     }
     case INGREDIENT_MIDDLE: {
       return {
         ...state,
       
       };
     }
     default: {
       return state;
     }
   }
 };