import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import App from './App.vue';
import routes from './routes/routes.js';

// plugin setup
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueTheMask);

//Vuex
import StoreVuex from './configs/VuexConfig';
const store = new Vuex.Store(StoreVuex);

// configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history',
})

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})

