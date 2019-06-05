import Vue from 'vue'
import { Row, Col, Card, Button, Icon } from 'ant-design-vue'
const component = {
  Row,
  Col,
  Card,
  Button,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
