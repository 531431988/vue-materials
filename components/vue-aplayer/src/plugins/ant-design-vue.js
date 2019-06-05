import Vue from 'vue'
import { Row, Col, Card, Button } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Card,
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
