import Vue from 'vue'
import { Card, Button } from 'ant-design-vue'
const component = {
  Card,
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
