import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

const instance2 = axios.create({
  baseURL: 'http://localhost:4445/api/'
});

export const todoApi = ({

  getTodos(){
    return instance.get(`todos`);
  },

  getNewTodos(){
    return instance.get(`users`);
  },

});

export const authApi = ({

  login(email, password, nickname){
    return instance2.post(`auth/login`, { email, password, nickname });
  },

});


export const postsApi = ({

  getPostsPrev(){
    return instance2.get(`article/list`);
  },
  getPostById(id){
    return instance2.get(`article/${ id }`);
  },
});
