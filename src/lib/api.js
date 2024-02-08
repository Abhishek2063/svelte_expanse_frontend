// api.js

import axios from 'axios';
import {PUBLIC_API_URL} from '$env/static/public'
const baseURL = PUBLIC_API_URL; 
// Create an Axios instance with default configuration
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptor to add authorization token from session storage to requests
api.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('ACCESS_TOKEN');
    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

// Define functions for common HTTP methods (GET, POST, PUT, PATCH, DELETE)
export const get = (url, params) => api.get(url, { params });
export const post = (url, data) => api.post(url, data);
export const put = (url, data) => api.put(url, data);
export const patch = (url, data) => api.patch(url, data);
export const del = (url) => api.delete(url);

