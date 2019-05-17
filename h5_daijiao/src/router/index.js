import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Person from '@/components/Person'
import ChargeMoney from '@/components/ChargeMoney'
import Balance from '@/components/Balance'
import Certification from '@/components/Certification'
import Download from '@/components/Download'
import Update from '@/components/Update'
import ServerUpdate from '@/components/ServerUpdate'
import IDCardUpdate from '@/components/IDCardUpdate'
import PaySuccess from '@/components/PaySuccess'
import OrderManage from '@/components/OrderManage'

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
    },{
      path:'/balance',
      name:'Balance',
      component: Balance
    },{
      path:'/certification',
      name:'Certification',
      component:Certification
    },{
      path:'/download',
      name:'Download',
      component:Download
    },{
      path:'/update',
      name:'Update',
      component: Update
    },{
      path:'/serverupdate',
      name:'ServerUpdate',
      component: ServerUpdate
    },{
      path:'/idcardupdate',
      name:'IDCardUpdate',
      component:IDCardUpdate
    },{
      path:'/paysuccess',
      name:'PaySuccess',
      component:PaySuccess
    },{
      path:'/OrderManage',
      name:'OrderManage',
      component:OrderManage
    }
  ]
})
