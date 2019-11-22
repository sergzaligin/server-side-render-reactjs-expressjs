import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { setHello } from '../store/actions';



const About = ({ data, setHello }) => {

  useEffect(()=>{
    document.title = 'О сайте';
  }, []);

  return(
    <div>
      <h1>About page</h1>
      <Link to="/">Home</Link>
      <br />
      { data }
      <br />
      <button onClick={ () => setHello('newData') } >Click</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.aboutPage.data
  };
};

export default {
  component: connect(mapStateToProps, {
    setHello,
  })(About),
  title: 'О сайте',
};
