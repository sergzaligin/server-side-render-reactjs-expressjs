import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import posts from './posts';

export default combineReducers({
  auth,
  form: formReducer,
  posts,
});
