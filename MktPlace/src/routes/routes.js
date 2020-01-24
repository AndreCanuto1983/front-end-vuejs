// GeneralViews
const NotFound = () => import('../pages/GeneralViews/NotFoundPage.vue');

// Views
const Home = () => import('../components/Home.vue'); //@src/components/Home.vue
const Products = () => import('../components/Products.vue');

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/products', component: Products },
    { path: '*', component: NotFound },
]

export default routes
