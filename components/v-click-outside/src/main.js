import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue'
import * as vClickOutside from 'v-click-outside-x'
Vue.use(vClickOutside)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
