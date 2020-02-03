<template>
    <div class="header boxShadow">
        <b-row class="mktPlace" align-v="start">
            <b-col cols="6" md="6">
                <router-link class="redirect" :to="{ name: 'Products'}">
                    <h6 class="alterCursor"><b class="mktColor">Mkt</b><b class="placeColor">Place</b></h6>
                </router-link>
            </b-col>
            <b-col cols="6" md="6">
                <router-link class="redirect" :to="{ name: 'ShoppingCart'}">
                    <p class="alignProduct alterCursor textConfig">
                        Produtos &nbsp;&nbsp;
                        <img class="img alterCursor" src="@/assets/icons/shopping-cart.svg" />
                    </p>
                </router-link>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: {}
            };
        },
    };
</script>

<style scoped>
    .header {
        z-index: 1;
        top: 0;
        position: fixed;
        width: 100%;
        text-align: center;
        background-color: white;
        padding: 10px;
    }

    .mktPlace {
        padding-left: 10px
    }

    .mktColor {
        color: dimgray;
    }

    .placeColor {
        color: blueviolet;
    }

    .img {
        max-width: 150px;
    }

    .alignProduct {
        margin-right: 10%;
    }

    .alterCursor {
        cursor: pointer;
    }

    .textConfig {
        font-size: 12px;
    }

    .boxShadow {
        box-shadow: 0px 1px 5px lightgrey;
    }

    .redirect {
        color: blueviolet !important;
        text-decoration: none !important;
    }
</style>