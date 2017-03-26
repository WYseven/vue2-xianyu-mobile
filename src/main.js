// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var infiniteScroll =  require('vue-infinite-scroll');
//无线滚动插件
Vue.use(infiniteScroll)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
