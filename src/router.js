import Vue from 'vue'
import Router from 'vue-router'
import AutGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: () => import('./views/Meetup/Meetups.vue')
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: () => import('./views/Meetup/CreateMeetup.vue'),
      beforeEnter: AutGuard
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      props: true,
      component: () => import('./views/Meetup/Meetup.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./views/User/Profile.vue'),
      beforeEnter: AutGuard
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('./views/User/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('./views/User/SignIn.vue')
    }
  ]
})
