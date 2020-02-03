// GeneralViews
const NotFound = () => import('../pages/GeneralViews/NotFoundPage.vue');
const WorkingOn = () => import('../pages/GeneralViews/WorkingOn.vue');

// Views
const Products = () => import('../components/Products.vue'); //@src/components/Home.vue
const Checkout = () => import('../components/Checkout.vue');
const ShoppingCart = () => import('../components/ShoppingCart.vue');

const routes = [
    { path: '/', redirect: '/products' },
    { path: '/products', name: 'Products', component: Products },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/shoppingcart', name: 'ShoppingCart', component: ShoppingCart },
    { path: '*', name: 'NotFound', component: NotFound },
]

export default routes
