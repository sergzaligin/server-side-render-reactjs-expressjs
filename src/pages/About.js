import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const About = (props) => {

  useEffect(()=>{
    document.title = 'О сайте';
  }, []);

  return(
    <div>
      <h1>About page</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default {
  component: connect(null, {})(About),
  title: 'О сайте',
};
