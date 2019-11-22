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
      <Link to="/post/list">Список постов</Link>
      <br />
      <Link to="/login">LOgin</Link>
      <br />
      <br />
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

const ld = (store, param) => {
  return store.dispatch(fetchPostsPrev(param));
};

export default {
  component: connect(mapStateToProps, { fetchPostsPrev })(Home),
  title: 'Главная страница',
  loadData: [
    ld,
  ],
};
