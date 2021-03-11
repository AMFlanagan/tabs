import { Action } from "redux";

export default interface IAction<T> extends Action {
  payload?: T;
}
