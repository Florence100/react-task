import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.flickr.com/services/rest',
  timeout: 5000,
});

export default axiosInstance;
