import Vue from 'vue'
import { Row, Col, Card, Icon } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Card,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
