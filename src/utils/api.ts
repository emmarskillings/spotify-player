import axios from 'axios';

import { setAuthHeader } from './functions';

// API GET request util function
export const get = async (url: string, params?: Object) => {
  // Sets the authorization header before making an API request
  setAuthHeader();
  const result = await axios.get(url, params);
  return result.data;
};

// API POST request util function
export const post = async (url: string, params: Object) => {
  // Sets the authorization header before making an API request
  setAuthHeader();
  const result = await axios.post(url, params);
  return result.data;
};