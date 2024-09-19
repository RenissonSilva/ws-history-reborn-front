// api.js ou axiosConfig.js
import axios from 'axios';

// Defina a URL base com a porta que você deseja usar
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://ws-history-reborn-back.vercel.app', // Substitua pela URL e porta desejada
});

export default api;