//import axios from 'axios';
//import LocalDataService from '@/services/LocalDataService.js';

////define o caminho padrão da api
////console.log(window.location);
//const API_URL = (window.location.host.includes('localhost') ? 'http://localhost:8080/' : 'http://ec2-3-83-135-22.comp.amazonaws.com:500/');

////cria axios personalizado
////export default axios.create({
////  baseURL: API_URL
////})

//var axiosIntance = axios.create({
//  baseURL: API_URL
//});

//axiosIntance.interceptors.request.use(function (config) {
//  // Do something before request is sent
//  const localdata = new LocalDataService();
//  var token = localdata.get("token");
//  if (token != null) {
//    config.headers["Authorization"] = 'Bearer ' + token;
//  }
//  return config;
//}, function (error) {
//  // Do something with request error
//  return Promise.reject(error);
//});

////cria axios personalizado
//export default axiosIntance
