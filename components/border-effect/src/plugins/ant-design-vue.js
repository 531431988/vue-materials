import Vue from 'vue'
import { Card, Avatar, Row, Col } from 'ant-design-vue'
const { Meta } = Card
const component = {
  Card,
  Meta,
  Avatar,
  Row,
  Col
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
