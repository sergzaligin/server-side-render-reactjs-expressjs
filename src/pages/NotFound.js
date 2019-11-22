import React from 'react';
// const r = [
//   {
//     route: { component: [Function], routes: [Array] },
//     match: { path: '/', url: '/', params: {}, isExact: true }
//   },
//   {
//     route:
//      {
//        path: '/',
//        exact: true,
//        component: [Function: component],
//        title: 'Главная страница'
//      },
//     match: {
//       path: '/', url: '/', isExact: true, params: {}
//     }
//   }
// ]
const NotFound = () => {
  return(
    <div>
      <h1>Page not found 404</h1>
    </div>
  );
};

export default {
  component: NotFound,
};
