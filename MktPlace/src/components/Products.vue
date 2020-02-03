<template id="Products">
    <b-container>
        <Header></Header>
        <Banner></Banner>
        <div v-if="products.length > 0">
            <b-row class="alignContent" align-h="center">
                <div v-for="item in products"
                     class="col-lg-3 col-md-5"
                     style="margin: 10px">
                    <b-card class="boxShadow">
                        <img class="img" :src="item.picture" />
                        <p class="tag">Eletrônicos</p>
                        <div class="description">
                            <p>{{item.name == undefined ? 'teste' : item.name}}</p>
                        </div>
                        <div>
                            <h5>R${{item.price}}</h5>
                        </div>
                    </b-card>
                    <router-link :to="{ name: 'ShoppingCart', params: { product: item }}">
                        <b-button class="button boxShadow">
                            ADICIONAR AO CARRINHO
                        </b-button>
                    </router-link>
                </div>
            </b-row>
        </div>
        <Spinner v-else></Spinner>
        <router-view></router-view>
        <Footer></Footer>
    </b-container>
</template>

<script>
    import ProductService from '../services/ProductService'
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Banner from '../components/Banner.vue'
    import Spinner from '../components/Spinner.vue'

    export default {
        components: {
            'Header': Header,
            'Footer': Footer,
            'Banner': Banner,
            'Spinner': Spinner
        },
        data() {
            return {
                products: [],
            };
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            getProducts() {
                const productService = new ProductService();

                productService.get().then(response => {
                    this.products = response.data;
                }).catch(error => {
                    window.console.log('Error', error);
                });
            }            
        },
    };
</script>
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .boxShadow {
        box-shadow: 2px -5px 20px lightgrey;
    }

    .card {
        border-radius: 0px;
    }

    .img {
        max-width: 150px;
    }

    .tag {
        color: blueviolet;
        font-size: 10px;
    }

    .description {
        height: 100px;
        width: 150px;
        display: inline-block;
        overflow: hidden;
        text-overflow: clip ellipsis;
        direction: ltr;
        font-size: 12px;
    }

    .alignContent {
        top: 160px;
        position: relative;
        margin-bottom: 60px;
    }

    .button {
        margin-top: auto;
        background-color: white;
        color: blueviolet;
        border-radius: 0;
        font-size: 12px;
        width: -webkit-fill-available;
        padding: 5px;
        border: 1px solid lightgrey;
        text-align: center;
        text-transform: uppercase;
    }

        .button:hover {
            background-color: blueviolet;
            color: white !important;
            text-decoration: none !important;
            text-decoration-color: white;
        }
</style>
