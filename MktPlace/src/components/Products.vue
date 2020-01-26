<template>
    <b-container>
        <div class="row">
            <div class="col-lg-6">
                <label>Nome</label>
                <b-form-input></b-form-input>
                <label>Email</label>
                <b-form-input></b-form-input>
                <label>Cpf</label>
                <b-form-input></b-form-input>
                <label>Data Nascimento</label>
                <b-form-input></b-form-input>
                <label>Telefone</label>
                <b-form-input></b-form-input>
            </div>
            <div class="col-lg-6">
                <label>CEP *</label>
                <b-form-input @keyup.enter.prevent="seachPostalCode()"
                              @blur="seachPostalCode"
                              name="PostalCode"
                              class="cep-mask"
                              v-mask="'#####-###'"
                              v-model="address.postalCode"
                              placeholder="00000-000">
                    <b-form-input @click.prevent="seachPostalCode" slot="addonRight" type="primary" :disabled="verifyDisabled(customDisabled.searchPostalCode)">
                        <span>
                            <i class="nc-icon nc-zoom-split"></i>
                        </span>
                    </b-form-input>
                </b-form-input>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <b-form-input label="Endereço"
                                  v-model="address.address"
                                  name="Address"
                                  maxlength="60"
                                  required>
                    </b-form-input>
                </div>
                <div class="col-lg-2 col-sm-2">
                    <b-form-input label="Número"
                                  v-model="address.number"
                                  maxlength="10"
                                  name="Number"
                                  required>
                    </b-form-input>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <b-form-input label="Complemento"
                                  v-model="address.address2"
                                  maxlength="60"
                                  name="Complement">

                    </b-form-input>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-10">
                    <b-form-input label="Bairro"
                                  v-model="address.neighborhood"
                                  name="Neighborhood"
                                  maxlength="60"
                                  required>
                    </b-form-input>
                </div>

                <div class="col-lg-6 col-sm-10">
                    <b-form-input label="Cidade"                                 
                                  v-model="address.city"
                                  maxlength="60"
                                  name="City"
                                  required>
                    </b-form-input>
                </div>

                <div class="col-lg-2 col-sm-2">
                    <b-form-input label="UF"                               
                                  maxlength="2"
                                  v-model="address.state"
                                  name="State"
                                  required>
                    </b-form-input>
                </div>
            </div>
        </div>
        <div class="row">
            <b-button style="background-color:blueviolet; border-radius:5px; font-size:12px;">
                Concluir compra
            </b-button>
        </div>
    </b-container>
</template>

<script>
    //import ApiCep from '@/apis/viacep/viaCepApi.js';
    //import Formatter from '@/util/Formatter.js';

    export default {
        data() {
            return {
                address: {
                    id: 0,
                    title: '',
                    postalCode: '',
                    ibge: '',
                    address: '',
                    number: '',
                    neighborhood: '',
                    city: '',
                    state: '',
                    address2: '',
                    reference: ''
                },
                postalCode: {
                    cep: '',
                    logradouro: '',
                    complemento: '',
                    bairro: '',
                    localidade: '',
                    uf: '',
                    unidade: '',
                    ibge: '',
                    gia: ''
                },
            };
        },
        mounted() {
        },
        methods: {
            //async seachPostalCode() {
            //    this.clear();
            //    if (this.address.postalCode != '' && this.address.postalCode.length > 8) {

            //        const apiCep = new ApiCep();
            //        const formatter = new Formatter();

            //        let postalCode = formatter.justNumber(this.address.postalCode);

            //        return await apiCep.GetCep(postalCode).then(response => {
            //            if (response.data.erro != true) {
            //                this.postalCode = response.data;
            //                this.address.postalCode = this.postalCode.cep.toUpperCase();
            //                this.address.address = this.postalCode.logradouro.toUpperCase();
            //                this.address.neighborhood = this.postalCode.bairro.toUpperCase();
            //                this.address.city = this.postalCode.localidade.toUpperCase();
            //                this.address.state = this.postalCode.uf.toUpperCase();
            //                this.address.ibge = this.postalCode.ibge.toUpperCase();
            //            }
            //            else {
            //                console.log('O CEP informado não foi encontrado!');
            //            }
            //        }).catch(error => {
            //            if (error.message == "Network Error") {
            //                console.log('error without Internet: ', error);
            //                console.log('Não foi possível pesquisar o cep, verifique sua conexão com a internet.');
            //                this.clear();
            //            }
            //            else {
            //                console.log('error get cep: ', error);
            //            }
            //        }).then(() => {
            //            this.activeSpinnerLoading = false;
            //        });
            //    }
            //}
        },

    }
</script>

<style>
</style>
