// admin
import AdminHome from './pages/admin/AdminHome';
import AdminPostList from './pages/admin/posts/AdminPostList';
import AdminPostCreate from './pages/admin/posts/AdminPostCreate';

// main
import App from './App';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';


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
        path: "/about",
        ...About,
      },
      {
        path: "/todo",
        ...Todo,
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
