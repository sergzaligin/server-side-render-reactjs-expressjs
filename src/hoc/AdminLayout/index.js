import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './Layout.scss';

import Header from '../../components/common/layout/Admin/Header';
import Footer from '../../components/common/layout/Admin/Footer';


class Layout extends Component{



  render(){

    // if(!this.props.isAuth){
    //   return <Redirect to="/" />;
    // }

    return (
      <div className="wrapper" >
        <Header />
        <main className="mainContent" role="main">
          <div className="container" >
            { this.props.children }
          </div>
        </main>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {})(Layout);
