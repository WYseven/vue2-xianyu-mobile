// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/loading.gif',
  attempt: 1
})

/* import { Loadmore } from 'mint-ui';
 import 'mint-ui/lib/style.css'


 Vue.component(Loadmore.name, Loadmore); */

/* 移动端设置js */
require('./libraries/mobile')

/* 加载css文件 */

require('./assets/css/app.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
