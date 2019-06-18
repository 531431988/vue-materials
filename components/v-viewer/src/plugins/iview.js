import Vue from 'vue'
import { Row, Col, Button } from 'iview'
import '../theme.less'
const component = {
  Row,
  Col,
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
