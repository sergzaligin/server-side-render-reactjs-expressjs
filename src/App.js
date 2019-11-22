import React from 'react';
import { renderRoutes } from 'react-router-config';

import Layout from './hoc/MainLayout';

import './App.scss';

const App = ({ route }) => {
  //debugger;
  return(
    <Layout>
      { renderRoutes(route.routes) }
    </Layout>
  );
}

App.defaultProps = {
  route: null,
}

export default { component: App };
