import { SET_HELLO } from '../types';

const initialState = {
  data: 'Data',
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_HELLO:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }

};
