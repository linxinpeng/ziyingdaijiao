// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import axios from 'axios'
axios.defaults.baseURL = location.href.includes('asse.app.shebao.info')?'http://shebao.dai58.cn/':'http://test.shebao.dai58.cn/'
Vue.prototype.axios = axios

//使用Vux
import {Alert,XHeader,XInput,XButton,XDialog,Radio,Toast,Tab, TabItem,Swiper,SwiperItem } from 'vux'

Vue.component('alert',Alert)
Vue.component('x-header',XHeader)
Vue.component('x-input',XInput)
Vue.component('x-button', XButton)
Vue.component('x-dialog', XDialog)
Vue.component('radio', Radio)
Vue.component('toast', Toast)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('swiper', Swiper)
Vue.component('swiper-item',SwiperItem)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
