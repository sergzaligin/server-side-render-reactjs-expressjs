import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import AdminPostCreateForm from './AdminPostCreateForm';

const MyPostsReduxForm = reduxForm({
  form: 'myposts',
})(AdminPostCreateForm);

const AdminPostCreate = () => {

  useEffect(()=>{
    document.title = 'Админ панель - создать пост';
  }, []);

  const onSubmit = ({ post }) => {
    console.log('MyPostsForm', post);
  };

  return(
    <div>
      <h1>Админ панель - создать пост</h1>
      <Link to="/admin">Home</Link>
      <br />
      <MyPostsReduxForm onSubmit={ onSubmit } />
    </div>
  );
};

export default { component: AdminPostCreate, title: 'Админ панель - создать пост' };
