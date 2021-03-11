import ActionTypes from "../_types";
import IAction from "../interface";

export type TAddCategory = IAction<string>;
export const addCategory = (title: string): TAddCategory => ({
  type: ActionTypes.CATEGORIES.ADD,
  payload: title,
});
