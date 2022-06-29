import Vue from 'vue'
import VueRouter from 'vue-router'

const BASE_URL = import.meta.env.BASE_URL

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Dashboard.vue'),
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
  {
    path: '/employees',
    component: () => import('@/views/Employees.vue'),
  },
  {
    path: '/reports',
    component: () => import('@/views/Reports.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
]

const router = new VueRouter({
  base: BASE_URL,
  mode: 'history',
  routes,
})

export default router
