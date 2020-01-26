/**
 * Esta é uma classe para funções genéricas para máscaras
 **/
export default class Formatter {
  
  /**
   * Função remove qualquer caracter que não seja número do campo
   * Ex: CPF = 460.539.540-71  -> Retorna = 46053954071
   * @param param
   */
  justNumber(param) {
    return param.replace(/[^0-9]+/g, '');
  }
}
