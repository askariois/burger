import { combineReducers } from 'redux';
import { constructorIngredients } from './constructor-ingredients';
import {ingredientsReducer}  from './index';

export const rootReducer = combineReducers({
   ingredient: ingredientsReducer,
   constructor: constructorIngredients
 });