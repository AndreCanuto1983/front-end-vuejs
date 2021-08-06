<template>
  <div>
    <br>
    <h3 class="colorDefault text-center"><i class="fas fa-user-lock"></i> Redefinir Senha</h3>
    <p class="colorDefault text-center">Informe o cpf do cadastro, enviaremos um e-mail de recuperação para o e-mail cadastrado.</p>
    <b-row align-h="center">
      <b-card class="col-lg-7 col-md-12 col-sm-auto">
        <b-form @submit.stop.prevent>
          <label class="colorDefault">CPF</label>
          <!-- máscara para cpf e cnpj = v-mask="['###.###.###-##', '##.###.###/####-##']"-->
          <b-input v-mask="['###.###.###-##']"
                   @blur="validation()"
                   v-model="cpf"
                   :state="msgFeedback"
                   id="feedback-user"
                   size="sm">
          </b-input>
          <b-form-invalid-feedback :state="msgFeedback">
            Informe um CPF válido.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="msgFeedback"></b-form-valid-feedback>
        </b-form><br>
        <div class="float-right">
          <b-button size="sm" variant="outline-primary" right-align="true" @click="forgotPassword()">Enviar</b-button>
        </div>
      </b-card>
    </b-row>
    <br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cpf: "",
        msgFeedback: null,
        //regex para email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
        //regex para cpf e cnpj: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
      }
    },
    methods: {
      validation() {
        if (this.cpf.length != 14)
          this.msgFeedback = false;
        else
          this.msgFeedback = true;
      },
      forgotPassword() {
        if (this.cpf.length < 1)
          this.msgFeedback = false;
      }
    },
    mounted() {
      //sobe o scrool para o topo da página após ser redirecionado no flow
      window.scrollTo(0, 0);
    }
  }
</script>

<style scoped>
  .colorDefault {
    color: gray;
  }
</style>
