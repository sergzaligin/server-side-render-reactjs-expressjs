import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPostsPrev } from '../store/actions';
import { connect } from 'react-redux';

import PostPrev from '../components/Post/PostPrev/PostPrev';

const Home = ({ postsPrev, fetchPostsPrev }) => {

  useEffect(()=>{
    document.title = 'Главная страница';
    fetchPostsPrev();
  }, []);

  return(
    <div>
      <h1>Home page</h1>
      <Link to="/admin">Админка</Link>
      <br />
      <Link to="/about">О сайте</Link>
      <br />
      <Link to="/login">Форма входа</Link>
      <br />
      <Link to="/todo">Страница с задачами</Link>
      <br />
      <Link to="/post/list">Список постов</Link>
      <div>
        <div>
          <PostPrev postsPrev={postsPrev} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    postsPrev: state.posts.postsPrev,
  };
};

export default { component: connect(mapStateToProps, { fetchPostsPrev })(Home), title: 'Главная страница' };
