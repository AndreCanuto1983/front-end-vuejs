import axios from '@/configs/AxiosConfig.js';
import ServiceBase from '@/services/ServiceBase.js';

export default class ProductService extends ServiceBase {

  async ruBrand(data) {
    return await axios.post('api/V1/CORE_Product/RUCORE_ProductBrand', {
      id: data.id,
      idView: data.idView,
      idOriginBusiness: data.idOriginBusiness,
      name: data.name,
      description: data.description      
    }, { headers: this.headers });
  }
}
