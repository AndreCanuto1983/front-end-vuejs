/**
 * COMO UTILIZAR
 * Importe o CustomNotification >> import CustomNotifications from 'src/util/CustomNotifications.js';
 * Instancie a classe >> const customNotifications = new CustomNotifications(this);
 * Aplique a mensagem >> customNotifications.showWarning('O CPF/CNPJ não foi encontrado.');
 * O danger e o ok se não passar a mensagem por parâmetro eles já setarão uma por padrão, os demais serão necessários
 * */
import swal from 'sweetalert2';

export default class CustomNotifications {
  constructor(context) {
    this.context = context;
  }

  notificationVue = null;
  horizontalAlign = 'right';
  verticalAlign = 'bottom';

  showOk(msg = 'Registro salvo com sucesso!') {
    this.context.$notify(
      {
        message: '<span>' + msg + '</span>',
        icon: 'fa fa-check-circle',
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
        type: 'success'
      })
  }

  showInfo(msg) {
    this.context.$notify(
      {
        message: '<span>' + msg + '</span>',
        icon: 'fa fa-exclamation-circle',
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
        type: 'info'
      })
  }

  showWarning(msg) {
    this.context.$notify(
      {
        message: '<span>' + msg + '</span>',
        icon: 'fa fa-exclamation-circle',
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
        type: 'warning'
      })
  }

  //a mensagem ficará ativa por 1 minutos, equivalente a 60000 milisegundos
  showDanger(msg = 'Ocorreu um erro inexperado!') {
    this.context.$notify(
      {
        message: '<span>' + msg + '</span>',
        icon: 'fa fa-skull',
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
        type: 'danger',
        timeout: 30000,
      })
  }

  showQuestion(msg = '') {
    let response;

    if (msg == '')
      msg = 'Existem dados não salvos, deseja realmente sair?'

    swal({
      title: msg,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: '#87CB16',
      cancelButtonColor: '#FB404B',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim',
      focusConfirm: false,
      focusCancel: true
    }).then((result) => {
      if (result.value) {
        response = result.value;
      }
      })
    console.log(response);
    return response;
  }

}
