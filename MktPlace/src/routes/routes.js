// GeneralViews
const NotFound = () => import('../pages/GeneralViews/NotFoundPage.vue');
const WorkingOn = () => import('../pages/GeneralViews/WorkingOn.vue');

// Views
const Home = () => import('../components/Home.vue'); //@src/components/Home.vue
const Products = () => import('../components/Products.vue');

// main childrens
const main = {
    path: '/home',
    component: Home,
    children: [
        {
            path: 'home/products',
            name: 'Produtos',
            component: Products
        },
        { path: '*', name: 'WorkingOn', component: WorkingOn }
    ]
}

// rotas principais
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    main,
    { path: '*', component: NotFound }
]

export default routes
