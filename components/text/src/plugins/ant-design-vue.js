import Vue from 'vue'
import { Row, Col, Card } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Card
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
