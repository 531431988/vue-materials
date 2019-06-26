import Vue from 'vue'
import { Button } from 'iview'
const component = {
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
