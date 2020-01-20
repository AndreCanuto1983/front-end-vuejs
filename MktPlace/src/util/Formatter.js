/**
 * Esta é uma classe para funções genéricas para máscaras
 **/
export default class Formatter {
    
  /**
   * Converte data e hora UTC para local padrão 18/05/1983 13:22:10
   * Converte datas em formato do javascript para nosso padrão BR 18/05/1983 13:22:10
   * @param {any} param
   */
  convertDateTimeUTCToLocal(param) {
    let now = new Date(param);
    let mountDateTimeUTCToLocal = (("0" + (now.getDate())).slice(-2) + "/" + ("0" + (now.getMonth() + 1)).slice(-2) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
    return mountDateTimeUTCToLocal;
  }

  /**
   * Função remove qualquer caracter que não seja número do campo
   * Ex: CPF = 460.539.540-71  -> Retorna = 46053954071
   * @param param
   */
  justNumber(param) {
    return param.replace(/[^0-9]+/g, '');
  }

  /**
   * Remove tudo o que não é números e letras
   * @param {any} param
   */
  justNumberAndLetter(param) {
    return param.replace(/[\W_]/, '');
  }

  /**
   * Função insere a máscara no CPF
   * @param param
   */
  maskCpf(param) {
    return param.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
  }

  /**
   * Função insere a máscara no CNPJ
   * @param param
   */
  maskCnpj(param) {
    return param.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
  }

  //faz a mesma coisa da de cima porém mais explicativa
  formatCnpj(param) {
    param = param.replace(/^(\d{2})(\d)/, "$1.$2"); //Coloca ponto entre o segundo e o terceiro dígitos
    param = param.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3"); //Coloca ponto entre o quinto e o sexto dígitos
    param = param.replace(/\.(\d{3})(\d)/, ".$1/$2"); //Coloca uma barra entre o oitavo e o nono dígitos
    param = param.replace(/(\d{4})(\d)/, "$1-$2"); //Coloca um hífen depois do bloco de quatro dígitos
    return param
  }

  /**
   * Função para aceitar apenas números no campo
   * @param {any} param
   */
  soNumeros(param) {
    return param.replace(/\D/g, "")
  }

  /**
   * Função para aceitar apenas carateres no campo
   * @param {any} param
   */
  semNumeros(param) {
    return param.replace(/\d/g, "")
  }

  /**
   * Função para transformar tudo em minúsculo
   * @param {any} param
   */
  soMinusculas(param) {
    return param.toLowerCase()
  }

  /**
   * Função para transformar tudo em maiúsculo
   * @param {any} param
   */
  soMaiusculas(param) {
    return param.toUpperCase()
  }

  /**
   * Função para formatar cep
   * @param {any} param
   */
  cep(param) {
    param = soNumeros(param)
    param = param.replace(/^(\d{5})(\d)/, "$1-$2")
    return param
  }

  /**
   * Função genérica para formatar celular 9 dígito e telefone ou celular comum
   * @param {any} param
   */
  phone(param) {
    if (param.length == 11) {
      //Formata celular 9 dígito
      param = param.replace(/^(\d\d)(\d)/g, "($1) $2")
      param = param.replace(/(\d{5})(\d)/, "$1-$2")
      return param
    }
    else {
      //Formata telefone ou celular comum
      param = param.replace(/^(\d\d)(\d)/g, "($1) $2")
      param = param.replace(/(\d{4})(\d)/, "$1-$2")
      return param
    }
  }

  /**
   * Função para formatar data
   * @param {any} param
   */
  data(param) {
    param = soNumeros(param)
    param = param.replace(/(\d{2})(\d)/, "$1/$2")
    param = param.replace(/(\d{2})(\d)/, "$1/$2")
    return param
  }
}
