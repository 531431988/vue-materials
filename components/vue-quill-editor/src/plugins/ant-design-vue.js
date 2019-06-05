import Vue from 'vue'
import { Icon, message } from 'ant-design-vue'
const component = {
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})

Vue.prototype.$message = message
