import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';
const TEST_URL = "http://127.0.0.1:8000/api"

/***
 * this function to create axios instance 
 * set up the request interceptor for the axios instance
 * @param url |default baseurl
 * 
 * @returns  an axios instance for the desired url
 */
const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json',
    }
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('AUTHTOKEN');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
}

export const http = createAxiosInstance(BASE_URL);
export const auth = createAxiosInstance(BASE_URL);
export const test = createAxiosInstance(TEST_URL);
export const testAuth = createAxiosInstance(TEST_URL);
