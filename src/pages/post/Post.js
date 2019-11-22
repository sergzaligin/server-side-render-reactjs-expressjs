import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import PostView from '../../components/Post/PostView/PostView';
import { fetchPostView } from '../../store/actions';

const Post = (props) => {

  useEffect(() => {
    document.title = 'Просмотр поста';
    props.fetchPostView(props.match.params.id);
  }, []);

  return <PostView postView={ props.postView } />;

};

const mapStateToProps = (state) => {
  return {
    postView: state.posts.postView,
  };
};

const loadData = (store, param) => {
  return store.dispatch(fetchPostView(param));
};

export default {
  component: connect(mapStateToProps,
    { fetchPostView })(Post),
    title: 'Просмотр поста',
    loadData,
  };
