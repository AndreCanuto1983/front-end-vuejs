import axios from 'axios';

/**
 * Class Viacep
 * */
export default class ViaCepApi {
  async GetCep(cep){
    return await axios.get('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
