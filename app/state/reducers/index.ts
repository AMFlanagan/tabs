import { combineReducers } from "redux";

import {
  categories,
  IState as CategoryState,
  INITIAL_STATE as CategoriesInitialState,
} from "./categories";

export interface IState {
  categories: CategoryState;
}

export const INITIAL_STATE: IState = {
  categories: CategoriesInitialState,
};

export default combineReducers({
  categories,
});
