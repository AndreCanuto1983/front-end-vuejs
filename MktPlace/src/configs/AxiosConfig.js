import axios from 'axios';

//define o caminho padrão da api
const API_URL = (window.location.host.includes('http://localhost:50408/'));

var axiosIntance = axios.create({
    baseURL: API_URL
});

axiosIntance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosIntance
