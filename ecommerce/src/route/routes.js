import Router from 'vue-router'

const Index = () => import('@/views/Index');
const Home = () => import('../components/Home');
const Login = () => import('@/views/user/Login');
const WorkinngOn = () => import('@/views/general/WorkingOn');
const NotFound = () => import('@/views/general/NotFound');
const Products = () => import('../components/Products');
const About = () => import('../components/About');

const ForgotPassword = () => import('../components/ForgotPassword');
const UserRegistration = () => import('../components/UserRegistration');

export default new Router({
  mode: 'history',
  hash: false, //remove # da url
  routes: [
    {
      path: '/',/* redirect: '/index', */
      component: Index,
      children: [        
        {
          name: 'Home',
          path: '/home',
          component: Home
        },
        {
          name: 'Produtos',
          path: '/products',
          component: Products
        },
        {
          name: 'Sobre',
          path: '/about',
          component: About
        },
        {
          name: 'Login',
          path: '/login',
          component: Login
        },
        {
          name: 'Esqueceu a Senha',
          path: '/forgotpassword',
          component: ForgotPassword
        },
        {
          name: 'Cadastro de Usuário',
          path: '/userregistration',
          component: UserRegistration
        },
        // Páginas em construção
        {
          name: 'WorkinngOn',          
          path: '/workingon',          
          component: WorkinngOn
        }        
      ],      
    },
    {
      path: '*',
      name: 'NotFound',      
      component: NotFound
    },
  ],
})
