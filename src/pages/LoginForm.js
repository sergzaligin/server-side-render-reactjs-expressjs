import React from 'react';
import { Field } from 'redux-form';

const LoginForm = (props) => {

  return (
    <form onSubmit={ props.handleSubmit } >

      <div>
        <Field
          placeholder={ "Nickname" }
          component="input"
          type="text"
          name={ "nickname" }
        />
        <Field
          placeholder={ "email" }
          component="input"
          type="email"
          name={ "email" }
        />
        <Field
          placeholder={ "Password" }
          component="input"
          type="password"
          name={ "password" }
        />

      </div>
      <div>
        <button>Войти</button>
      </div>

     </form>
  );

};

export default LoginForm;
