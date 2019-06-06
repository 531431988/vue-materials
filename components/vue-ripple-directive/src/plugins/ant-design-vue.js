import Vue from 'vue'
import { Card, List, Row, Col, Avatar } from 'ant-design-vue'
const component = {
  Card,
  List,
  Row,
  Col,
  Avatar
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
Vue.component(List.Item.name, List.Item)
Vue.component(List.Item.Meta.name, List.Item.Meta)
