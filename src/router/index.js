import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Favorite from '@/components/Favorite'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      props: true
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite,
      props: true
    }
  ]
})
