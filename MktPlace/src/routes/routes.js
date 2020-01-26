// GeneralViews
const NotFound = () => import('../pages/GeneralViews/NotFoundPage.vue');
const WorkingOn = () => import('../pages/GeneralViews/WorkingOn.vue');

// Views
const Home = () => import('../components/Home.vue'); //@src/components/Home.vue
const Requests = () => import('../components/Requests.vue');

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/requests', component: Requests },
    { path: '/Products', component: WorkingOn },
    { path: '*', component: NotFound },
]

export default routes
