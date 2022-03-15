import { combineReducers } from 'redux';
import {ingredientsReducer}  from './index';

export const rootReducer = combineReducers({
   ingredient: ingredientsReducer
 });