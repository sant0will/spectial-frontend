import axios from "axios";

const api = axios.create({
   baseURL: 'https://spectial.herokuapp.com' 
});

export default api;