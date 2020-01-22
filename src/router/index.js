import Vue from 'vue'
import VueRouter from 'vue-router'
import Memory from '../views/Memory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'memory',
    component: Memory
  },
  {
    path: '/Math',
    name: 'math',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Math.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
