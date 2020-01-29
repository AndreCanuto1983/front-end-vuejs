<template>
    <b-container>
        <Header></Header>
        <b-row class="alignContent">
            <div>
                <b-table hover :items="items" :fields="fields"></b-table>
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
                fields: ['PRODUTOS', 'QUANTIDADE', 'VALOR UNITÁRIO', 'TOTAL'],
                items: [
                    { isActive: true, id: 1, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { isActive: false, id: 2, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { isActive: false, id: 3, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                    { isActive: true, id: 4, age: 38, first_name: 'Jami', last_name: 'Carney' }
                ],
            }
        },
        methods: {          
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
