import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchTodos, fetchNewTodos } from '../store/actions';

const Todo = ({ newtodos, todos, fetchTodos, fetchNewTodos }) => {

  useEffect(()=>{
    fetchTodos();
    fetchNewTodos();
    document.title = 'Подсказки';
  }, []);

  return(
    <div>
      <h1>Todo page</h1>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <button onClick={ () => fetchTodos() } >Click</button>
        </div>
      </div>

      <div>
      { newtodos.map(newtodo => <p key={ newtodo.id } >{ newtodo.id }. { newtodo.name }</p>) }
      </div>
      <br />
      <div>
      { todos.map(todo => <p key={ todo.id } >{ todo.id }. { todo.title }</p>) }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todosPage.todos,
    newtodos: state.todosPage.newtodos,
  };
};

const ld = (store, param) => {
  return store.dispatch(fetchTodos(param));
};

const ld2 = (store, param) => {
  return store.dispatch(fetchNewTodos(param));
};

export default {
  component: connect(mapStateToProps, {
    fetchTodos,
    fetchNewTodos,
  })(Todo),
  title: 'Подсказки',
  loadData: [
    ld,
    ld2,
  ]
};
