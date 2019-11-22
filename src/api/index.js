import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4445/api/'
});


export const authApi = ({

  login(email, password, nickname){
    return instance.post(`auth/login`, { email, password, nickname });
  },

});

export const postsApi = ({

  getPostsPrev(){
    return instance.get(`article/list`);
  },
  getPostById(id){
    return instance.get(`article/${ id }`);
  },

});
