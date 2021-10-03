import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UniList from '../views/universities/UniList.vue'
import UniListDetails from '../views/universities/UniListDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/universities',
    name: 'UniList',
    component: UniList
  },
  {
    path: '/universities/:abbrv',
    name: 'UniListDetails',
    component: UniListDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
