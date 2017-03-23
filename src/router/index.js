import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'
import List from '@/components/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
