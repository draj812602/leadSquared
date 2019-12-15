import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/register',
    name: 'register',
    
    component: () => import('../views/Register.vue')
  },
  {
    path: '/user',
    name: 'user',
    
    component: () => import('../views/GetUser.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
