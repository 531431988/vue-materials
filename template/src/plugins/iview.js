import Vue from 'vue'
import { Row, Col, Card, Button, Icon } from 'iview'
const component = {
  Row,
  Col,
  Card,
  Button,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
