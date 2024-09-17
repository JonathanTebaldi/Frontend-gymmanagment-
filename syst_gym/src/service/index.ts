import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8080/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});