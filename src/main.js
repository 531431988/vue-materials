import Vue from 'vue'
import './plugins/iview.js'
import router from './router'
import App from './App.vue'
import api from '@/api/index'
import './WMlib.less'

Vue.config.productionTip = false
Vue.prototype.$get = api.$get
Vue.prototype.$post = api.$post
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
