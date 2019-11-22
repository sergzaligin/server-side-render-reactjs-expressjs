import { SET_TODOS, SET_NEWTODOS } from '../types';

const initialState = {
  todos: [],
  newtodos: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    case SET_NEWTODOS:
      return {
        ...state,
        newtodos: action.payload,
      }
    default:
      return state;
  }

};
