import axios from 'axios';

//https://free.currconv.com/api/v7/
//convert?q=USD_PHP&compact=ultra&apiKey=e557ddd9e8b1f4054098

const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;