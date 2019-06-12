import Vue from 'vue'
import { Row, Col, Icon, Card, Button } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Icon,
  Card,
  Button
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
