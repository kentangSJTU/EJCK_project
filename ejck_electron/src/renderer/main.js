import Vue from 'vue'
import axios from 'axios'
import BootstrapVue from "bootstrap-vue"
import App from './App'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(BootstrapVue);

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
