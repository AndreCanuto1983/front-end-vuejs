import axios from '@/configs/AxiosConfig.js';
import ServiceBase from '@/services/ServiceBase.js';

/**
 * Class Product Service
 * */
export default class ProductService extends ServiceBase {

  /**
     * RU - Register / Update para product
     * @param {any} data     
    */
  async ruProduct(data) {
    return await axios.post('api/V1/CORE_Product/RUCORE_Product', {
      id: data.id,
      idView: data.idView,
      name: data.name,
      nickName: data.nickName,
      barCode: data.barCode,
      quantity: data.quantity,
      stockQuantity: data.stockQuantity,
      costPrice: data.costPrice,
      salePrice: data.salePrice,
      description: data.description,
      idOriginBusiness: data.idOriginBusiness,
      isService: data.isService,
      idFamily: data.idFamily,
      idSubGroup: data.idSubGroup,
      idGroup: data.idGroup,
      idBrand: data.idBrand,
      maximumDiscount: data.maximumDiscount,
      timeOfExecution: data.timeOfExecution,
      workHourValue: data.workHourValue,
      idUnitMeasure: data.idUnitMeasure,
      idManufacture: data.idManufacture,
      lastPurchaseDate: data.lastPurchaseDate,
      lastPurchasePrice: data.lastPurchasePrice,
      conversionCode: data.conversionCode,
      guarantee: data.guarantee,
      idGuarantee: data.idGuarantee,
      guaranteeKm: data.guaranteeKm,
      idGuaranteeKm: data.idGuaranteeKm,
      revision: data.revision,
      idRevision: data.idRevision,
      revisionKm: data.revisionKm,
      idRevisionKm: data.idRevisionKm,
      markup: data.markup,
      idAggregatedProductService: data.idAggregatedProductService,
      isDeleted: data.isDeleted,
    }, { headers: this.headers });
  }
     
  //isService: false

  /**
     * RU - Register / Update para product
     * @param {any} data     
    */
  async ruGroup(data) {
    return await axios.post('api/V1/CORE_Product/RUCORE_ProductGroup', {
      id: data.id,
      idView: data.idView,
      idParent: data.idParent,
      idOriginBusiness: data.idOriginBusiness,
      name: data.name,
      isDeleted: data.isDeleted,
      Description: data.description      
    }, { headers: this.headers });
  }

  /**
     * RU - Register / Update para product
     * @param {any} data     
    */
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
