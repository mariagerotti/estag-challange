import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:38725' // codespace
  // baseURL: 'http://127.0.0.1:80' // local
});

export default instance;
