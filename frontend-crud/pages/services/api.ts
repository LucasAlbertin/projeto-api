import axios from 'axios';

// Configuração do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // URL da sua API NestJS
});

export default api;