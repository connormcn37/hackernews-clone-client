import Vue from 'vue'
import Router from 'vue-router'
// import Test from '@/components/Test'
import LinkList from '@/components/LinkList'
import CreateLink from '@/components/CreateLink'
import AppLogin from '@/components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LinkList',
      component: LinkList
    },
    {
      path: '/create',
      component: CreateLink
    },
    {
      path: '/login',
      component: AppLogin
    }
  ],
  mode: 'history'
})
