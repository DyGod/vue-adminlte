/* eslint-disable */
import './assets/css.js'
import './assets/script.js'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueHead from 'vue-head'
import { VueExtendLayout, layout } from 'vue-extend-layout'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueExtendLayout)

Vue.mixin({
  data(){
    return{
      logoMini: '<b>Ez</b>Pz',
      logoLG: '<b>Eazy</b>Payroll',
      menu: [
        'Main Nav',
        {
          'text' : 'Dashboard',
          'url' : '/',
          'icon' : 'dashbaord'
        }
      ]

    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout
})
