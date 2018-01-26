// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'//异步请求数据模块
import axios from 'axios'
import iView from 'iview';
import VueAxios from 'vue-axios'
import {store} from './store.js'//vuex
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false



Vue.use(VueAxios,axios);
Vue.use(VueRouter);
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
