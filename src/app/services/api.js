// api.js ou axiosConfig.js
import axios from 'axios';

// Defina a URL base com a porta que você deseja usar
const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pela URL e porta desejada
});

export default api;