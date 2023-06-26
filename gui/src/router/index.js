import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/sites',
    name: 'sites',
    component: function () {
      return import('../views/SitesView.vue')
    }
  },
  {
    path: '/build',
    name: 'build',
    component: function () {
      return import('../views/BuildView.vue')
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: function () {
      return import('../views/SigninView.vue')
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import('../views/SignupView.vue')
    }
  },
  {
    path: '/build-info',
    name: 'build-info',
    component: function () {
      return import('../views/BuildInfoView.vue')
    }
  }
  ,
  {
    path: '/myaccount',
    name: 'myaccount',
    component: function () {
      return import('../views/MyAccountView.vue')
    }
  },
  {
    path: '/mysites',
    name: 'mysites',
    component: function () {
      return import('../views/MySitesView.vue')
    }
  },
  {
    path: '/account',
    name: 'account',
    component: function () {
      return import('../views/ClientView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
