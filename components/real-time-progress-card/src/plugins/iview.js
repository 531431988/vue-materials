import Vue from 'vue'
import { Row, Col, Card, Button, Progress, Icon } from 'iview'
import '../theme.less'
const component = {
  Row,
  Col,
  Card,
  Button,
  Progress,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
