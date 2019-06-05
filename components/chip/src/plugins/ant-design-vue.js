import Vue from 'vue'
import { Avatar, Icon } from 'ant-design-vue'
const component = {
  Avatar,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
