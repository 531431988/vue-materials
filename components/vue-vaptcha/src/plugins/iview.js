import Vue from 'vue'
import { Row, Col, Card, Button, Input } from 'iview'
import '../theme.less'

const component = {
  Row,
  Col,
  Card,
  Button,
  Input
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
