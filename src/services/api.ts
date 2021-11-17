import axios from "axios";


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export const key = '';
export const languageDefault = 'pt-BR';

export default api;
