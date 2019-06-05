import Vue from 'vue'
import { Layout, Row, Col, Button, Card, Divider, Icon, BackTop } from 'ant-design-vue'
const { Header, Content, Footer } = Layout
const { Meta } = Card
const component = {
  Layout,
  Header,
  Content,
  Footer,
  Row,
  Col,
  Button,
  Meta,
  Card,
  Divider,
  Icon,
  BackTop
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
