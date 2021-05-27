import { createRouter, createWebHashHistory } from 'vue-router'
import Code from '../views/Code.vue'

const routes = [
  {
    path: '/',
    name: 'Code',
    component: Code
  },
  {
    path: '/tracklist',
    name: 'Tracklist',

    component: function () {
      return import('../views/Tracklist.vue')
    }
  },
  {
    path: '/meme-collection',
    name: 'Meme',

    component: function () {
      return import('../views/Meme.vue')
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
