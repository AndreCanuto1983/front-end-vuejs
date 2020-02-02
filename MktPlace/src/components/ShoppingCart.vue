<template id="ShoppingCart">
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <div>
                <b-table hover :items="items"></b-table>
                <!--<b-table hover :products="products"></b-table>-->                

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
            this.products.push(this.$route.params.product);
            let formatItems = {
                Nome: this.products[0].name,
                Quantidade: 0,
                ValorUnitario: this.products[0].price,
                Total: 0
            }
            this.items.push(formatItems);
            console.log('products',this.products);
            console.log('items', this.items);
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
