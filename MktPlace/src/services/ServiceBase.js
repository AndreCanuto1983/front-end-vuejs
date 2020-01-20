import axios from '@/configs/AxiosConfig.js';

/**
 * Class Service Base
 * Este service é só de métodos genéricos para ser utilizado por qualquer service.
 * Utilizar: Herde esta classe usando: "extends ServiceBase" no export default
 * */
export default class ServiceBase {

  headers = {}
  constructor() {}

  /**
   * Delete genérico
   * Path: passar final caminho do delete da API como string. Ex: "DeleteProduto" + id
   * @param path
   * @param id
   */
  async delete(path, id) {
    return await axios.get('api/' + path + '?id=' + id, { headers: this.headers });
  }

  /**
   * Get genérico
   * Path: passar final caminho do GET da API como string. Ex: path = "GetProduto" + data = objeto
   * @param path
   * @param data
   */
  async get(path, data = {}) {
    return await axios.get('api/' + path, { params: data, headers: this.headers });
  }
}
