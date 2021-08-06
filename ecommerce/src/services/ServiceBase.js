import axios from '@/configs/AxiosConfig.js';

export default class ServiceBase {

    async get() {
        return await axios.get('https://api.myjson.com/bins/9e9fl');
    }
}
