import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'home'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue'),
    redirect:'/tab1',
    children:[
      {
        path: '/tab1',
        name: 'tab1',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Tab1.vue')
      },{
        path: '/tab2',
        name: 'tab2',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Tab2.vue')
      },{
        path: '/tab3',
        name: 'tab3',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Tab3.vue')
      },{
        path: '/tab4',
        name: 'tab4',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/pages/Tab4.vue')
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
  },{
    path: '/paihang',
    name: 'paihang',
    component: () => import(/* webpackChunkName: "about" */ '../views/paihang/paihang.vue')
  },{
    path: '/bookjia',
    name: 'bookjia',
    component: () => import(/* webpackChunkName: "about" */ '../views/bookJia/bookjia.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
