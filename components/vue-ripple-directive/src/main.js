import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import Ripple from 'vue-ripple-directive'
import './theme.less'
Vue.use(iView)
Ripple.color = 'rgba(0, 0, 0, 0.1)'
Vue.directive('ripple', Ripple)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
