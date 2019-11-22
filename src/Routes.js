// admin
import AdminHome from './pages/admin/AdminHome';
import AdminPostList from './pages/admin/posts/AdminPostList';
import AdminPostCreate from './pages/admin/posts/AdminPostCreate';

// main
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Post from './pages/post/Post';
import PostsListPage from './pages/post/PostsListPage';

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...Home,
      },
      {
        path: "/login",
        ...Login,
      },
      {
        path: "/post/list",
        exact: true,
        ...PostsListPage,
      },
      {
        path: "/post/:id",
        exact: true,
        ...Post,
      },
      {
        path: "/about",
        ...About,
      },
      {
        path: "/admin",
        exact: true,
        ...AdminHome,
      },
      {
        path: "/admin/post/list",
        ...AdminPostList,
      },
      {
        path: "/admin/post/create",
        ...AdminPostCreate,
      },
      {
        ...NotFound,
      },
    ]
  }
]
