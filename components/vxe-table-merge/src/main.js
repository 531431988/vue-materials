import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)
Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
