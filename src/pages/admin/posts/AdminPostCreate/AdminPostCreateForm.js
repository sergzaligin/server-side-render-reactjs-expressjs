import React from 'react';
import { Field } from 'redux-form';

const AdminPostCreateForm = (props) => {

  return (
      <form onSubmit={ props.handleSubmit } >

      <div>
        <Field
          placeholder={ "Post text" }
          component={ 'textarea' }
          name={ "post" }
        />
      </div>
      <div>
        <button>Add post</button>
      </div>

     </form>
  );

};

export default AdminPostCreateForm;
