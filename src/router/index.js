import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/CustomerDetails/:id',
    name: 'CustomerDetails',
    component: () => import('../views/CustomerDetails.vue')
  },
  {
    path: '/Edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
