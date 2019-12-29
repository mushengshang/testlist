import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
    redirect:"/tab1",
    children:[
      {
        path: '/tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/pages/Tab1.vue')
      }, {
        path: '/tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/pages/Tab2.vue')
      }
    ]
  },{
    path: '/move',
    name: 'Move',
    component: () => import(/* webpackChunkName: "about" */ '../views/Move/Move.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
