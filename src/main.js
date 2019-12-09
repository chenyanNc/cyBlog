// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import axios from 'axios'
import api from './api/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// 引入动画效果
import 'animate.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$api = api
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
