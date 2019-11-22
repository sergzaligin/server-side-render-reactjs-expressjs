import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminPostList = () => {

  useEffect(()=>{
    document.title = 'Админ панель - список постов';
  }, []);

  return(
    <div>
      <h1>Админ панель - список постов</h1>
      <Link to="/admin">Home</Link>
      <br />
    </div>
  );
};

export default { component: AdminPostList, title: 'Админ панель - список постов' };
