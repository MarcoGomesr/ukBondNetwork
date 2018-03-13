/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import  VueRouter from 'vue-router'
import { routes } from './routes'

global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons' 
Vue.component('icon', Icon)


Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
