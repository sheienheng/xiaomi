import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=> import('../views/home.vue');
const Classity = ()=> import('../views/classity.vue');
const Cart = ()=> import('../views/cart.vue');
const Me = ()=> import('../views/me.vue');
const Search = ()=> import('../views/search.vue');
const Login = ()=> import('../views/login.vue');
const Reg = ()=> import('../views/reg.vue');
const proMes = ()=>import('../views/proMes.vue')

Vue.use(Router);


export default new Router({

  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classity',
      component: Classity
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/reg',
      component:Reg
    },
    {
      path:'/proMes',
      component:proMes
    }
  ]
})
