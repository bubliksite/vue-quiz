import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {layout: "admin", name: "Все игры"},
    component: () => import('../views/Admin')
  },
  {
    path: '/admin/games/current/:id',
    name: 'currentGame',
    component: () => import('../views/CurrentGame')
  },
  {
    path: '/admin/games/:id/end',
    name: 'endGame',
    component: () => import('../views/EndGame')
  },
  {
    path: '/admin/games/create',
    name: 'createGame',
    meta: {layout: "admin", name: "Создать игру"},
    component: () => import('../views/CreateGame')
  },
  {
    path: '/admin/games/create/:id',
    name: 'addCommand',
    meta: {layout: "admin", name: "Добавить команду"},
    component: () => import('../views/AddCommand')
  },
  {
    path: '/admin/games/active',
    name: 'activeGames',
    meta: {layout: "admin", name: "Активные игры"},
    component: () => import('../views/ActiveGames')
  },
  {
    path: '/admin/games/ended',
    name: 'endedGames',
    meta: {layout: "admin", name: "Завершенные игры"},
    component: () => import('../views/EndedGames')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
