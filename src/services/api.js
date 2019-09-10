import axios from "axios";

const api = axios.create({
   baseURL: 'https://spectialbackend.herokuapp.com/' 
});

export default api;
