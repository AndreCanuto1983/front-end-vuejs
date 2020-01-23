import Vue from 'vue';
import Vuex from 'vuex'
import StoreVuex from './configs/VuexConfig' //Vuex
import VueRouter from 'vue-router'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import routes from './routes/routes.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue' // This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { ModalPlugin } from 'bootstrap-vue' // This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { CardPlugin } from 'bootstrap-vue' // This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue' // This imports the dropdown and table plugins

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueTheMask);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)

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

