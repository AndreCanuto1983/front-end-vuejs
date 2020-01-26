<template>
    <b-container>
        <b-row v-if="products.length > 0">
            <div v-for="item in products"
                 class="col-lg-3 col-md-5"
                 style="margin: 10px">
                <b-card class="shadow">
                    <img class="img" :src="item.picture" />
                    <p class="tag">Eletrônicos</p>
                    <div class="description">
                        <p>{{item.name}}</p>
                    </div>
                    <div>
                        <h5>R${{item.price}}</h5>
                    </div>
                </b-card>
                <b-button class="button">
                    ADICIONAR AO CARRINHO
                </b-button>
            </div>
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
                }).catch(error => {
                    window.console.log('Error', error);                    
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

    .card {
        border-radius: 0px;
    }

    .img {
        max-width: 150px;
    }

    .shadow {
        -webkit-box-shadow: 0px -5px 13px 0px rgba(163,163,163,0.38);
        -moz-box-shadow: 0px -5px 13px 0px rgba(163,163,163,0.38);
        box-shadow: 0px -5px 13px 0px rgba(163,163,163,0.38);
    }

    .tag {
        color: blueviolet;
        font-size: 10px;
    }

    .description {
        height: 140px;
        width: 150px;
        display: inline-block;
        overflow: hidden;
        text-overflow: clip ellipsis;
        direction: ltr;
    }

    .button {
        background-color: white;
        color: blueviolet;
        border-radius: 0;
        font-size: 12px;
        width: inherit;
        border: 1px solid lightgrey;
    }

        .button:hover {
            background-color: blueviolet;
            color: white;
        }
</style>
