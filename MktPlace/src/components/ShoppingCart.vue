<template id="ShoppingCart">
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <div>
                <b-table hover :products="products" :fields="fields"></b-table>
            </div>
        </b-row>
        <Footer></Footer>
    </b-container>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Spinner from '../components/Spinner.vue'
    import { EventBus } from '../services/event-bus';

    export default {
        components: {
            'Header': Header,
            'Footer': Footer,
            'Spinner': Spinner,

        },
        data() {
            return {
                fields: ['PRODUTOS', 'QUANTIDADE', 'VALOR UNITÁRIO', 'TOTAL'],
                products: []
            }
        },
        created() {
            EventBus.$on('products', data => {
                console.log('Product', data);
                this.setProducts(this.products);
            });

            let response = this.getProducts();
            this.products.push(response);
        },
        methods: {
            setProducts(data) {
                //armazeno os produtos no localStorage
                localStorage.setItem('products', data);
            },
            getProducts() {
                //buscar os produtos no localstorage
                return this.products = localStorage.getItem('products');
            },
            delete(index) {
                this.products.splice(index, 1);
            },
            deleteLocalStorage(data) {
                let productList = this.getProducts();

                if (productList != undefined) {
                    productList.forEach((item,index){
                        if (item == data) {
                            item.splice()
                        }
                    })
                }
                //removo os produtos
                localStorage.removeItem('products');
            }
        }
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
</style>
