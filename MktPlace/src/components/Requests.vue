<template>
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <b-col cols="6">
                <label>Nome</label>
                <b-form-input v-model="person.name"></b-form-input>
                <label>Email</label>
                <b-form-input v-model="person.email"></b-form-input>
                <label>Cpf</label>
                <b-form-input v-mask="['###.###.###-##']" v-model="person.cpf"></b-form-input>
                <b-row>
                    <b-col>
                        <label>Data Nascimento</label>
                        <b-form-input v-mask="['##/##/####']" v-model="person.birthDate"></b-form-input>
                    </b-col>
                    <b-col>
                        <label>Telefone</label>
                        <b-form-input v-mask="['(##)#####-####','(##)####-####']" v-model="person.phone"></b-form-input>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="6">
                <label>CEP</label>
                <b-form-input v-mask="['##.###-###']" v-model="address.postalCode" @blur="seachPostalCode()" @keyup.enter.prevent="seachPostalCode()"></b-form-input>
                <b-row>
                    <b-col>
                        <label>Endereço</label>
                        <b-form-input v-model="address.address"></b-form-input>
                    </b-col>
                    <b-col>
                        <label>Número</label>
                        <b-form-input v-mask="['###.###.###-##']" v-model="address.number"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <label>Complemento</label>
                        <b-form-input v-mask="['##/##/####']" v-model="address.complement"></b-form-input>
                    </b-col>
                    <b-col>
                        <label>Bairro</label>
                        <b-form-input v-mask="['(##)#####-####','(##)####-####']" v-model="address.neighborhood"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <label>Cidade</label>
                        <b-form-input v-mask="['(##)#####-####','(##)####-####']" v-model="address.city"></b-form-input>
                    </b-col>
                    <b-col>
                        <label>Estado</label>
                        <b-form-input v-mask="'AA'" v-model="address.state"></b-form-input>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="alignButton" >
            <b-button class="button">
                Concluir compra
            </b-button>
        </b-row>
        <Footer></Footer>
    </b-container>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Spinner from '../components/Spinner.vue'
    import ApiCep from '@/apis/viacep/viaCepApi.js';
    import Formatter from '@/util/Formatter.js';

    export default {
        components: {
            'Header': Header,
            'Footer': Footer,
            'Spinner': Spinner,

        },
        data() {
            return {
                person: {
                    id: 0,
                    name: '',
                    email: '',
                    cpf: '',
                    birthDate: '',
                    phone: ''
                },
                address: {
                    id: 0,
                    postalCode: '',
                    ibge: '',
                    address: '',
                    number: '',
                    neighborhood: '',
                    city: '',
                    state: '',
                    complement: ''
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
        methods: {
            async seachPostalCode() {
                this.clearAddress();
                if (this.address.postalCode != '' && this.address.postalCode.length > 8) {

                    const apiCep = new ApiCep();
                    const formatter = new Formatter();

                    let postalCode = formatter.justNumber(this.address.postalCode);

                    return await apiCep.GetCep(postalCode).then(response => {
                        if (response.data.erro != true) {
                            this.postalCode = response.data;
                            this.address.postalCode = this.postalCode.cep.toUpperCase();
                            this.address.address = this.postalCode.logradouro.toUpperCase();
                            this.address.neighborhood = this.postalCode.bairro.toUpperCase();
                            this.address.city = this.postalCode.localidade.toUpperCase();
                            this.address.state = this.postalCode.uf.toUpperCase();
                            this.address.ibge = this.postalCode.ibge.toUpperCase();
                        }
                        else {
                            console.log('O CEP informado não foi encontrado!');
                        }
                    }).catch(error => {
                        if (error.message == "Network Error") {
                            console.log('error without Internet: ', error);
                            console.log('Não foi possível pesquisar o cep, verifique sua conexão com a internet.');
                            this.clear();
                        }
                        else {
                            console.log('error get cep: ', error);
                        }
                    })
                }
            },
            clearPerson() {
                this.person.id = 0;
                this.person.name = '';
                this.person.email = '';
                this.person.cpf = '';
                this.person.birthDate = '';
                this.person.phone = '';
            },
            clearAddress() {
                this.address.id = 0;                
                this.address.ibge = '';
                this.address.address = '';
                this.address.number = '';
                this.address.neighborhood = '';
                this.address.city = '';
                this.address.state = '';
                this.address.complement = '';
            }
        },

    }
</script>

<style>
    .alignContent {
        top: 160px;
        position: relative;
        margin-bottom: 60px;
    }

    .alignButton {
        top: 130px;
        position: relative;
        margin-bottom: 10px;
        float: right;
        margin-right: auto;
    }

    .button {
        background-color: blueviolet;
        color: white;
        border-radius: 0;
        border: 1px solid lightgrey;
    }

        .button:hover {
            background-color: blueviolet;
            color: white;
        }
</style>
