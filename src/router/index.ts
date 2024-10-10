import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modules/home/pages/Home.vue')
    },
    {
      path: '/match',
      name: 'match',
      component: () => import('@/modules/match/Match.vue')
    }
  ]
})

export default router
