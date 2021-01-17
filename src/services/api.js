import axios from 'axios';

//https://free.currconv.com/api/v7/


const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;