import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PostsList from '../../components/Post/PostsList/PostsList';
import { fetchPostsPrev } from '../../store/actions';

const PostsListPage = (props) => {

  useEffect(() => {
    document.title = 'Просмотр списка постов';
    props.fetchPostsPrev();
  }, []);

  return <PostsList postsPrev={ props.postsPrev } />;

};

const mapStateToProps = (state) => {
  return {
    postsPrev: state.posts.postsPrev,
  };
};

export default { component: connect(mapStateToProps, { fetchPostsPrev })(PostsListPage), title: 'Просмотр списка постов' };
