// frontend/src/utils/axiosInstance.js
import axios from 'axios';

// Crea una instancia de axios con la base URL dinámica
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Esto apunta al backend
});

export default axiosInstance;
