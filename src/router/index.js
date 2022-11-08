import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import form from '../views/form.vue'
import search from '../views/search.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/new',
    name: 'form',
    component: form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
