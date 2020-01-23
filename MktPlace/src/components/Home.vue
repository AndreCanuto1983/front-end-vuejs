<template>
    <div class="home">
        <b-button variant="outline-primary" @click="getProducts()">Button</b-button>
        <div class="container" v-if="products.length > 0">
            <div class="row">
                <b-card v-for="item in products"
                        class="col-lg-3 col-md-6"
                        style="margin: 10px">
                    <img :src="item.picture" style="max-width:200px" />
                    <p>Eletrônicos</p>
                    <div style="height:130px">
                        <p>{{item.name}}</p>
                    </div>
                    <div>
                        <h5>R${{item.price}}</h5>
                    </div>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import ServiceBase from '../services/ServiceBase.js'

    export default {

        data() {
            return {
                products: {}
            };
        },
        methods: {
            async getProducts() {
                const serviceBase = new ServiceBase();

                return await serviceBase.get().then(response => {
                    this.products = response.data;
                    console.log(this.products);
                }).catch(error => {
                    console.log('Error', error);
                });
            },

            mounted() {
                this.getProducts();
            }
        },
    };
</script>
<style scoped>
</style>
