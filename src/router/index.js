import Vue from 'vue'
import VueRouter from 'vue-router'

const BASE_URL = import.meta.env.BASE_URL

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/sales',
    component: () => import('@/views/Sales.vue'),
  },
  {
    path: '/stocks',
    component: () => import('@/views/Stocks.vue'),
  },
  {
    path: '/products',
    component: () => import('@/views/Products.vue'),
  },
  {
    path: '/categories',
    component: () => import('@/views/Categories.vue'),
  },
  {
    path: '/members',
    component: () => import('@/views/Members.vue'),
  },
]

const router = new VueRouter({
  base: BASE_URL,
  mode: 'history',
  routes,
})

export default router
