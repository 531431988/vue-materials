import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import viserVue from 'viser-vue'
Vue.use(viserVue)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
