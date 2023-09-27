import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Sobre/',
      name: 'Sobre',
      component: () => import('../views/AboutView.vue') 
    },
    {
      path: '/Sobre/:Pokemon/:Id',
      name: 'Sobre',
      component: () => import('../views/AboutView.vue') 
    },
  ]
})

export default router
