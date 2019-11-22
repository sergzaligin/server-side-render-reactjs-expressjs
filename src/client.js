import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@babel/polyfill';

import jwtDecode from 'jwt-decode';
import Cookie from 'cookie';
import Cookies from 'js-cookie';

import setAuthorizationToken from './utils/setAuthorizationToken';
import { setUser } from './store/actions';

import Routes from './Routes';
import store from './store';

import App from './App';

    // if(isJwtValid(res.data.token)){
    //   const jwtData = jwtDecode(res.data.token) || {};
    //   dispatch(setUser(jwtData));
    //   Cookies.set('jwt-token', res.data.token);
    //   localStorage.setItem('jwtToken', res.data.token);
    //   setAuthorizationToken(res.data.token);
    // }else{

    //   console.log('TOKEN IS NOTVALID NEED LOGOUT');

    // }


// const cookieStr = process.browser
// ? document.cookie
// : this.app.context.req.headers.cookie;
// const cookies = Cookie.parse(cookieStr || '') || {};
// const token = cookies['jwt-token'];
// console.log('token cookie', token);


if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  const jwtData = jwtDecode(localStorage.jwtToken) || {};
  store.dispatch(setUser(jwtData));
}


//console.log('localStorage.jwtToken', localStorage.jwtToken);



ReactDOM.render(
    <Provider store={ store } >
      <BrowserRouter>
        <>
          { renderRoutes(Routes) }
        </>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
