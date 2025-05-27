import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://judge0-ce.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    'X-RapidAPI-Key': '81dbafc35amsha92aa8482511eb3p1ca29cjsn6d3b9bfdc56c',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default axiosInstance;
