<template id="Checkout">
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <b-col lg="6" md="12">
                <label>Nome</label>
                <b-input name="name"
                         v-model="person.name"
                         maxlength="60">
                </b-input>
                <label>Email</label>
                <b-input v-model="person.email"></b-input>
                <label>Cpf</label>
                <b-input v-mask="['###.###.###-##']" v-model="person.cpf"></b-input>
                <b-row>
                    <b-col>
                        <label>Data Nascimento</label>
                        <b-input v-mask="['##/##/####']" v-model="person.birthDate"></b-input>
                    </b-col>
                    <b-col>
                        <label>Telefone</label>
                        <b-input v-mask="['(##)#####-####','(##)####-####']" v-model="person.phone"></b-input>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="6" md="12">
                <label>CEP</label>
                <b-input v-mask="['##.###-###']" v-model="address.postalCode" @blur="seachPostalCode()" @keyup.enter.prevent="seachPostalCode()"></b-input>
                <b-row>
                    <b-col cols="8">
                        <label>Endereço</label>
                        <b-input v-model="address.address"></b-input>
                    </b-col>
                    <b-col cols="4">
                        <label>Número</label>
                        <b-input v-mask="['###.###.###-##']" v-model="address.number"></b-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <label>Complemento</label>
                        <b-input v-mask="['##/##/####']" v-model="address.complement"></b-input>
                    </b-col>
                    <b-col>
                        <label>Bairro</label>
                        <b-input v-mask="['(##)#####-####','(##)####-####']" v-model="address.neighborhood"></b-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="8">
                        <label>Cidade</label>
                        <b-input v-mask="['(##)#####-####','(##)####-####']" v-model="address.city"></b-input>
                    </b-col>
                    <b-col cols="4">
                        <label>Estado</label>
                        <b-input v-mask="'AA'" v-model="address.state"></b-input>
                    </b-col>
                </b-row>
                <b-row align-h="end">
                    <b-col lg="5" md="3">
                        <b-button @click.prevent="msg()" class="button" style="width:155px;">
                            Concluir compra
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <Footer></Footer>
    </b-container>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Spinner from '../components/Spinner.vue'
    import ApiCep from '../apis/viacep/viaCepApi.js'
    import Formatter from '../util/Formatter.js'
    import Swal from 'sweetalert2'

    export default {
        components: {
            'Header': Header,
            'Footer': Footer,
            'Spinner': Spinner
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
                            this.address.postalCode = this.postalCode.cep;
                            this.address.address = this.postalCode.logradouro;
                            this.address.neighborhood = this.postalCode.bairro;
                            this.address.city = this.postalCode.localidade;
                            this.address.state = this.postalCode.uf.toUpperCase();
                            this.address.ibge = this.postalCode.ibge;
                        }
                        else {
                            console.log('O CEP informado não foi encontrado!');
                        }
                    }).catch(error => {
                        if (error.message == "Network Error") {
                            console.log('error without Internet: ', error);
                            console.log('Não foi possível pesquisar o cep, verifique sua conexão com a internet.');
                            this.clearAddress();
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
            },
            msg() {
                Swal.fire({
                    icon: 'success',
                    html: 'Seu cadastro foi solicitado com sucesso!',
                    showCloseButton: true,
                    showCancelButton: false,
                    confirmButtonText: '&larr; VOLTAR PARA HOME!',
                    imageUrl: '../src/assets/icons/left-arrow.svg',
                }).then(function (result) {
                    if (result) {
                        window.location.pathname = '/products';
                    }
                });
            }
        },
    }
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .alignContent {
        top: 160px;
        position: relative;
        margin-bottom: 60px;
    }

    .alignButton {
        top: 160px;
        position: relative;
        margin-bottom: 60px;
    }

    .button {
        background-color: blueviolet;
        color: white;
        border-radius: 0;
        border: 1px solid lightgrey;
        margin-top: 20px;
    }

        .button:hover {
            background-color: blueviolet;
            color: white;
        }

    .swal2-styled.swal2-confirm, .swal2-styled.swal2-confirm:hover {
        background-color: none !important;
        background: none !important;
        border: 0px solid white !important;
        color: blueviolet !important;
        border: none !important;
        font-size: small !important;
    }
</style>
