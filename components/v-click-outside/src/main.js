import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import * as vClickOutside from 'v-click-outside-x'
import './theme.less'
Vue.use(iView)
Vue.use(vClickOutside)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
