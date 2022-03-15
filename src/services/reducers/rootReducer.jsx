import { combineReducers } from 'redux';
import {constructor_ingredients}  from './constructor-ingredients';

export const rootReducer = combineReducers({
   cs: constructor_ingredients
 });