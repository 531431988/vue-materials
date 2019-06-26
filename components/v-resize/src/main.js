import Vue from 'vue'
import App from './App.vue'
import './plugins/iview'
import importDirective from '@/directive'
Vue.config.productionTip = false
/**
 * 注册指令
 */
importDirective(Vue)
new Vue({
  render: h => h(App)
}).$mount('#app')
