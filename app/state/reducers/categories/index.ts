import ActionTypes from "../../actions/_types";

export interface IState {
  categories: string[];
}

export const INITIAL_STATE = {
  categories: [],
};

export const categories = (state: IState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CATEGORIES.ADD:
      return { ...state, categories: [...state.categories, action.payload] };
    default:
      return state;
  }
};
