// GeneralViews
const NotFound = () => import('../pages/GeneralViews/NotFoundPage.vue');
const WorkingOn = () => import('../pages/GeneralViews/WorkingOn.vue');

// Views
const Products = () => import('../components/Products.vue'); //@src/components/Home.vue
const Checkout = () => import('../components/Checkout.vue');
const ShoppingCart = () => import('../components/ShoppingCart.vue');

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', component: Products },
    { path: '/checkout', component: Checkout },
    { path: '/shoppingcart', component: ShoppingCart },
    { path: '*', component: NotFound },
]

export default routes
