import axiosLibrary from 'axios';

const axios = axiosLibrary.create({
  withCredentials: false,
  baseURL: 'http://localhost:4000',
});

export default axios;
