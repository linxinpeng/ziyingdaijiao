import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Person from '@/components/Person'
import ChargeMoney from '@/components/ChargeMoney'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/person',
      name: 'Person',
      component: Person
    },{
      path:'/chargemoney',
      name:'ChargeMoney',
      component:ChargeMoney
    }
  ]
})
