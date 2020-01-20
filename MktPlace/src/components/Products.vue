<template>
    <div>
        <b-button>Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="success">Button</b-button>
        <b-button variant="outline-primary">Button</b-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    //import Component from 'vue-class-component';    
    ////import Spinner from './componentsSEN/Spinner.vue';

    //@Component({
    //    components: {
    //        //Spinner
    //    }
    //})
    export default class Products extends Vue {
        //activeSpinnerLoading = false;

        //product = {
        //    id: 0,
        //    idView: 0,
        //    idOriginBusiness: this.$store.getters.getBusiness().id,
        //    name: '',
        //    quantity: 0,
        //    stockQuantity: 0,
        //    costPrice: 0,
        //    salePrice: 0,
        //    description: '',
        //    isService: false,
        //    idGroup: 0,
        //    idBrand: 0
        //};

        //set(data) {
        //    //this.product.id = data.id;;
        //    //this.product.idView = data.idView;
        //    //this.product.idOriginBusiness = this.$store.getters.getBusiness().id;
        //    //this.product.name = data.name;
        //    //this.product.quantity = data.quantity;
        //    //this.product.stockQuantity = data.stockQuantity;
        //    //this.product.costPrice = data.costPrice;
        //    //this.product.salePrice = data.salePrice;
        //    //this.product.description = data.description;
        //    //this.product.isService = data.isService;
        //}

        //get() {
        //    //formata os dados para envio no service
        //    //let formatedProduct = {
        //    //    id: this.product.id,
        //    //    idView: this.product.idView,
        //    //    idOriginBusiness: this.$store.getters.getBusiness().id,
        //    //    name: this.product.name,
        //    //    quantity: this.product.quantity,
        //    //    stockQuantity: this.product.stockQuantity,
        //    //    costPrice: this.product.costPrice,
        //    //    salePrice: this.product.salePrice,
        //    //    description: this.product.description,
        //    //    isService: this.product.isService,
        //    //    idGroup: this.product.idGroup,
        //    //    idBrand: this.product.idBrand
        //    //}
        //    //return formatedProduct;
        //}

        //clear() {
        //    //this.product.id = 0;
        //    //this.product.idView = 0;
        //    //this.product.idOriginBusiness = this.$store.getters.getBusiness().id;
        //    //this.product.name = '';
        //    //this.product.quantity = 0;
        //    //this.product.stockQuantity = 0;
        //    //this.product.costPrice = 0;
        //    //this.product.salePrice = 0;
        //    //this.product.description = '';
        //    //this.product.isService = false;
        //    //this.product.idGroup = 0;
        //    //this.product.idBrand = 0;
        //}

        //async validate() {
        //    return this.$validator.validate();
        //}

        //getError(fieldName) {
        //    return this.errors.first(fieldName)
        //}

        //mounted() {
        //    this.$emit('functions', {
        //        'get': this.get,
        //        'validate': this.validate,
        //        'clear': this.clear,
        //        'set': this.set
        //    });
        //}
    }
</script>

<style>
</style>
