import jwtDecode from 'jwt-decode';
import Cookie from 'cookie';
import Cookies from 'js-cookie';

import setAuthorizationToken from '../utils/setAuthorizationToken';

import {
  SET_USER,
  SET_POSTS_PREV,
  SET_POST_VIEW
} from './types';

import { authApi, postsApi } from '../api/';

export const setUser = payload => ({
  type: SET_USER,
  payload,
});

export const fetchLogin = (email, password, nickname) => {

  return async dispatch => {

    const res = await authApi.login(email, password, nickname);


    if(isJwtValid(res.data.token)){
      const jwtData = jwtDecode(res.data.token) || {};
      dispatch(setUser(jwtData));
      Cookies.set('jwt-token', res.data.token);
      localStorage.setItem('jwtToken', res.data.token);
      setAuthorizationToken(res.data.token);
    }else{

      console.log('TOKEN IS NOTVALID NEED LOGOUT');

    }


  };

};

function autoLogin(dispatch){

    const cookieStr = process.browser
    ? document.cookie
    : this.app.context.req.headers.cookie;
    const cookies = Cookie.parse(cookieStr || '') || {};
    const token = cookies['jwt-token'];

    if(isJwtValid(token)){

      dispatch(setUser(token));
      console.log('TOKEN IS VALID');

    }else{

      console.log('TOKEN IS NOTVALID NEED LOGOUT');

    }

}

function isJwtValid(token){
  if(!token) return false;

  const jwtData = jwtDecode(token) || {};

  const expires = jwtData.exp || 0;

  return (new Date().getTime() / 1000) < expires;
}


const setPostsPrev = payload => ({
  type: SET_POSTS_PREV,
  payload,
});

export const fetchPostsPrev = () => {
  return async dispatch => {
    const res = await postsApi.getPostsPrev();
    dispatch(setPostsPrev(res.data));
  };
};

export const setPostView = payload => ({
  type: SET_POST_VIEW,
  payload,
});

export const fetchPostView = (id) => {
  return async dispatch => {
    const res = await postsApi.getPostById(id);
    dispatch(setPostView(res.data[0]));
  };
};
