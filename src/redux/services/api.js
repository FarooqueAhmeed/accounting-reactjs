import axios from 'axios';

const developmentURL = 'http://127.0.0.1:8000/';
const productionURL = 'https://api.example.com/'; // replace with your production URL

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? productionURL : developmentURL,
});

// export const userEndpoint = '/users';
// export const postEndpoint = '/posts';

export default api;
