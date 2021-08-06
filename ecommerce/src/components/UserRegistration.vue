<template>
  <div class="card">
    <div class="container">
      <br>
      <div class="row justify-content-center">
        <b-avatar :src="image" size="80px"></b-avatar>
      </div><br>
      <div class="row justify-content-center">
        <div class="col-lg-3">
          <b-form-file accept=".jpg"
                       size="sm"
                       v-model="file"
                       :state="Boolean(file) == false ? null : true,hasImage"
                       placeholder="Selecione a imagem">
          </b-form-file>
        </div>
      </div>
      <br>

      <div class="row">
        <b-form class="col-lg-6">
          <label>Nome completo</label>
          <b-input v-model="user.name"
                   @blur="validationName()"
                   :state="vName"
                   id="name"
                   size="sm"
                   maxlength="60">
          </b-input>
          <b-form-invalid-feedback :state="vName">
            Informe um nome de 3 a 60 caracteres.
          </b-form-invalid-feedback>
        </b-form>

        <b-form class="col-lg-3">
          <label>Apelido</label>
          <b-input v-model="user.nickname"
                   @blur="validationNickname()"
                   :state="vNickname"
                   id="nickname"
                   size="sm"
                   maxlength="10">
          </b-input>
          <b-form-invalid-feedback :state="vNickname">
            Informe um apelido de 3 a 10 caracteres.
          </b-form-invalid-feedback>
        </b-form>

        <b-form class="col-lg-3">
          <label>CPF</label>
          <!-- máscara para cpf e cnpj = v-mask="['###.###.###-##', '##.###.###/####-##']"-->
          <b-input v-mask="['###.###.###-##']"
                   @blur="validationCpf()"
                   v-model="user.cpf"
                   :state="vCpf"
                   id="cpf"
                   size="sm">
          </b-input>
          <b-form-invalid-feedback :state="vCpf">
            Informe um CPF válido.
          </b-form-invalid-feedback>
        </b-form>
      </div><br>

      <div class="row">
        <div class="col-lg-3">
          <label>Data de Nascimento</label>
          <b-form-datepicker id="birth"
                             placeholder="Selecione a data"
                             v-model="user.birth"
                             :state="validationBirth || vBirth"
                             calendar-width="100%"
                             :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                             size="sm">
          </b-form-datepicker>
        </div>

        <b-form-group class="col-lg-3" label="Gênero">
          <b-form-radio-group v-model="user.genre"
                              :options="options"
                              :state="validateGenre || vGenre"
                              plain
                              name="plain-inline">
            <b-form-invalid-feedback :state="validateGenre || vGenre">Selecione o gênero</b-form-invalid-feedback>
          </b-form-radio-group>
        </b-form-group>

        <b-form class="col-lg-3">
          <label>Telefone</label>
          <b-input v-mask="['(##) ####-####', '(##) #####-####']"
                   @blur="validationPhone(user.phone1, 'vPhone1')"
                   v-model="user.phone1"
                   :state="vPhone1"
                   id="phone1"
                   title="telefone principal"
                   size="sm">
          </b-input>
          <b-form-invalid-feedback :state="vPhone1">
            Informe um telefone válido.
          </b-form-invalid-feedback>
        </b-form>

        <b-form class="col-lg-3">
          <label>Telefone 2</label>
          <b-input v-mask="['(##) ####-####', '(##) #####-####']"
                   @blur="validationPhone(user.phone2, 'vPhone2')"
                   v-model="user.phone2"
                   :state="vPhone2"
                   id="phone2"
                   title="telefone secundário"
                   size="sm">
          </b-input>
          <b-form-invalid-feedback :state="vPhone2">
            Informe um Telefone válido.
          </b-form-invalid-feedback>
        </b-form>
      </div><br>

      <div class="row float-right">
        <div class="col-lg-3">
          <el-button type="success"
                     v-loading.fullscreen.lock="loading"
                     @click="save()">
            Salvar
          </el-button>
        </div>
      </div>

    </div><br>

  </div>
</template>

<script>
  const base64Encode = data =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  export default {
    data() {
      return {
        user: {
          name: "",
          nickname: "",
          cpf: "",
          birth: "",
          genre: "",
          phone1: "",
          phone2: ""
        },
        options: [
          { text: 'Masculino', value: '1' },
          { text: 'Feminino', value: '0' }
        ],
        loading: false,
        vCpf: null,
        vName: null,
        vNickname: null,
        vBirth: null,
        vGenre: null,
        vPhone1: null,
        vPhone2: null,
        file: null,
        image: null
      }
    },
    methods: {
      validationCpf() {
        if (this.user.cpf.length != 14)
          this.vCpf = false;
        else
          this.vCpf = true;
      },
      validationName() {
        if (this.user.name.length < 4)
          return this.vName = false;
        else
          return this.vName = true;
      },
      validationNickname() {
        if (this.user.nickname.length < 3)
          return this.vNickname = false;
        else
          return this.vNickname = true;
      },
      validationBirthday() {
        if (this.user.birth === "")
          return this.vBirth = false;
        else
          return this.vBirth = true;
      },
      validationGenre() {
        if (this.user.genre === "")
          return this.vGenre = false;
        else
          return this.vGenre = true;
      },
      validationPhone(value, variable) {
        if (variable == "vPhone1") {
          if (value.length <= 0)
            return this.vPhone1 = false;
          else
            return this.vPhone1 = true;
        }
        else {
          if (value.length > 0)
            return this.vPhone2 = true;
          else
            return this.vPhone2 = null;
        }
      },
      spinner(active) {
        if (active)
          this.loading = true;
        else
          this.loading = false;
      },
      convertToBase64() {
        base64Encode(this.file)
          .then(value => {
            this.image = value;
          })
          .catch(() => {
            this.image = null;
          });
      },
      async save() {
        if (this.user.birth == "") {
          this.vBirth = false;
          return;
        }          
        if (this.user.genre == "") {
          this.vGenre = false;
          return;
        }          
        else {
          this.spinner(true);

          setTimeout(() => {
            this.spinner(false);
          }, 2000);
        }
      }
    },
    computed: {
      validationBirth() {
        if (this.user.birth == "")
          return false;
        else
          return true;
      },
      validateGenre() {
        if (this.user.genre == "")
          return false;
        else
          return true;
      },
      hasImage() {
        this.file != null ? this.convertToBase64() : null;
      }
    },
    mounted() {
      //sobe o scrool para o topo da página após ser redirecionado no flow
      window.scrollTo(0, 0);
    }
  }
</script>

<style scoped>
</style>
