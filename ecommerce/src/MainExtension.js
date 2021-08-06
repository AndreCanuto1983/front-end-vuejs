import messagesPtBR from './veeValidate/strings/pt_BR';
//import ptBR from '@/veeValidate/strings/pt_BR';
import VeeValidate, { Validator } from 'vee-validate';

Validator.localize('pt_BR', messagesPtBR);

export default {
  async install (Vue) {    
    Vue.use(VeeValidate, {
      locale: 'pt_BR',
      dictionary: {
        pt_BR: { attributes: messagesPtBR },
      }
    })
  }
}
