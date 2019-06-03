import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import importDirective from '@/directive'
import './theme.less'
Vue.use(iView)
Vue.config.productionTip = false
/**
 * 注册指令
 */
importDirective(Vue)
new Vue({
  render: h => h(App)
}).$mount('#app')
