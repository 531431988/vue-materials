import Vue from 'vue'
import { Affix, Button } from 'ant-design-vue'
const component = {
  Affix,
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
