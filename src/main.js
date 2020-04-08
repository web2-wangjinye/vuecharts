// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import element from 'assets/elementui'
import 'assets/styles/reset.styl'
import 'element-ui/lib/theme-chalk/index.css'
import 'assets/styles/common.styl'
import 'babel-polyfill'
import store from './store'
import axios from '@/utils/http.js'
import router from './router'
import myCharts from './utils/myCharts.js'
Vue.use(myCharts)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 2 }
Vue.use(element)
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 引入mockjs
process.env.MOCK && require('./mock/')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
