<template>
    <b-container>
        <b-row v-if="products.length > 0">
            <b-card v-for="item in products"
                    class="col-lg-3 col-md-5"
                    style="margin: 10px">
                <img :src="item.picture" style="max-width:200px" />
                <p>Eletrônicos</p>
                <div style="height:130px">
                    <p>{{item.name}}</p>
                </div>
                <div>
                    <h5>R${{item.price}}</h5>
                </div>
                <b-button style="background-color:blueviolet; border-radius:0; font-size:12px;">
                    ADICIONAR AO CARRINHO
                </b-button>
            </b-card>
        </b-row>
        <b-row v-else align-self="center">
            <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            Carregando...
        </b-row>
    </b-container>
</template>

<script>
    import ProductService from '../services/ProductService'

    export default {
        data() {
            return {
                products: {}
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
                    console.log(this.products);
                }).catch(error => {
                    console.log('Error', error);
                });
            },
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
</style>
