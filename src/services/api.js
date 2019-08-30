import apisauce from 'apisauce';

const api = apisauce.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
