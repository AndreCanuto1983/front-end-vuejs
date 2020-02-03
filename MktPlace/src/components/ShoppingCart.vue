<template id="ShoppingCart">
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <div v-if="items[0] != undefined">
                <b-table hover :items="items"></b-table>
                <b-button variant="outline-primary" size="sm" @click="getProducts()">
                    Print local storage
                </b-button>
                <b-button variant="outline-primary" size="sm" @click="clearLocalStorage()">
                    clear
                </b-button>
                <b-button variant="outline-primary" size="sm" @click="productsOnList()">
                    Print products
                </b-button>
            </div>
            <div align-h="center" v-if="items[0] == undefined" class="msg">
                <p>Carrinho vazio =/</p>
            </div>
        </b-row>
        <Footer></Footer>
    </b-container>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Spinner from '../components/Spinner.vue'

    export default {
        components: {
            'Header': Header,
            'Footer': Footer,
            'Spinner': Spinner,
        },
        data() {
            return {
                products: [],
                items: []
            }
        },
        mounted() {
            if (this.$route.params.product != undefined) {

                this.products.push(this.$route.params.product);

                let val = parseFloat((this.products[0].price).replace(".", ""));
                val = val;
                let total = val * 1;

                let formatItems = {
                    Nome: this.products[0].name,
                    Quantidade: 1,
                    ValorUnitario: val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                    Total: total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                }
                this.items.push(formatItems);

                console.log('products', this.products);
                console.log('items', this.items);
            }
        },
        methods: {
            setProducts(data) {
                let productList = {
                    Produtos: data.name,
                    Quantidade: 1,
                    ValorUnitário: data.price,
                    ValorTotal: 0
                }

                this.products.push(productList);

                localStorage.setItem('productList', this.products);
            },
            getProducts() {
                console.log('localStorage', localStorage.getItem('productList'))
                return localStorage.getItem('productList');
            },
            delete(index) {
                this.products.splice(index, 1);
            },
            clearLocalStorage() {
                localStorage.removeItem('productList');
            },
            productsOnList() {
                console.log(this.products);
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

    .table th, .table td {
        width: 150px;
        height: 40px;
        display: inline-block;
        overflow: hidden;
        text-overflow: clip ellipsis;
    }

    .msg {
        font-size: 20px;
        color: blueviolet;
        text-shadow: 3px 2px 3px lightgrey;
        margin-top: 50%;
    }

    @media (max-width: 480px) {
        .table th, .table td {
            width: 90px;
            height: 40px;
            display: inline-block;
            overflow: hidden;
            text-overflow: clip ellipsis;
        }
    }
</style>
