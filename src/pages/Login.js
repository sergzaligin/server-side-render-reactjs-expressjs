import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import LoginForm from './LoginForm';

import { fetchLogin } from '../store/actions'

const LoginReduxForm = reduxForm({
  form: 'myposts',
})(LoginForm);

const Login = ({ fetchLogin }) => {

  useEffect(()=>{
    document.title = 'Login';
  }, []);

  const onSubmit = ({ email, password, nickname }) => {

    const User = {
      nickname,
      email,
      password,
    };

    console.log('Login', User);
    fetchLogin(email, password, nickname);
  };

  return(
    <div>
      <h1>Login</h1>
      <Link to="/admin">Home</Link>
      <br />
      <LoginReduxForm onSubmit={ onSubmit } />
    </div>
  );
};

export default { component: connect(null, { fetchLogin })(Login), title: 'Login' };
