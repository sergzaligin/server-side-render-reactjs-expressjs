import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ postsPrev }) => {
  return (
    <div>
      <h2>Список постов.</h2>
      {
        postsPrev.map(post => {
          return (
            <article key={ post._id } >
              <h2><Link to={`/post/${ post._id }`}>{ post.title }</Link></h2>
            </article>
          )
        })
      }
    </div>
  );
};

export default PostsList;
