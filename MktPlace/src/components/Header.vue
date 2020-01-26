<template>
    <div class="header">
        <b-row align-v="start" style="padding-left:100px">
            <h6><b class="mktColor">Mkt</b></h6>
            <h6><b class="placeColor">Place</b></h6>
            <!--falta ajustes-->
            <p @click.prevent="goRequests()" class="alignProduct alterCursor"></p>
            <img @click.prevent="goRequests()" class="img alterCursor" src="@/assets/icons/shopping-cart.svg" />
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
        methods: {
            goRequests() {
                this.$router.push({ path: "/requests" }).catch(err => { });
            },
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

    .mktColor {
        color: dimgray;
    }

    .placeColor {
        color: blueviolet;
    }

    .img {
        max-width: 150px;
        color: blueviolet;
    }

    .alignProduct {
        margin-right: 70%;
    }

    .alterCursor {
        cursor: pointer;
    }
</style>