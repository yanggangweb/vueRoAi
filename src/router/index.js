import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '../components/detail'
import listMain from '../components/listMain'
Vue.use(Router)
// 路由显示
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/listMain',
      name: 'listMain',
      component: listMain
    }
  ]
})
