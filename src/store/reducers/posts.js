import { SET_POSTS_PREV, SET_POST_VIEW } from '../types';

const initialState = {
  postsPrev: [],
  postView: {},
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_POSTS_PREV:
      return {
        ...state,
        postsPrev: action.payload,
      }
    case SET_POST_VIEW:
      return {
        ...state,
        postView: action.payload,
      }
    default:
      return state;
  }

};
