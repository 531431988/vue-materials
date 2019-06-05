import Vue from 'vue'
import { Button } from 'ant-design-vue'
const component = {
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
