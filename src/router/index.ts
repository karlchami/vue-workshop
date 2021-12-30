import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Base from '@/views/Base.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Base',
    component: Base
  },
]

const router = new VueRouter({
  routes
})

export default router
