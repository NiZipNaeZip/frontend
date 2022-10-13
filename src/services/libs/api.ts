import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://jipyo.link:8081',
  headers: {
    'Content-Type': 'application/json',
  },
});
