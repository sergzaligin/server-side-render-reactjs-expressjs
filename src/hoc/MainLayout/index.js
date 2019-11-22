import React, { Component } from 'react';

import './Layout.scss';

import Header from '../../components/common/layout/Main/Header';
import Footer from '../../components/common/layout/Main/Footer';


class Layout extends Component{

  render(){
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

export default Layout;
