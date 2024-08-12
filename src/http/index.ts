import axios from "axios";

const API_URL = "http://localhost:8081/"

export const http = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  headers: {
      Accept: "application/json",
      Content: "application/json",
      'Content-Type': "application/json"
  },
});

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = sessionStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  // Do something with request error
  console.log('Erro no interceptor do axios')
  return Promise.reject(error);
});

export default http