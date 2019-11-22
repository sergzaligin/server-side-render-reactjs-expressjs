import is from 'is_js';

import { SET_USER } from '../types';

const initialState = {
  user: null,
  isAuth: false,
};

export default  (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...action.payload },
        isAuth: !is.empty(action.payload),
      }
    default:
      return state;
  }
};

