import Vue from 'vue'
import { Row, Col, Card, Spin, Switch } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Card,
  Spin,
  Switch
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
