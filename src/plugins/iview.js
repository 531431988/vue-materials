import Vue from 'vue'
import { Layout, Header, Content, Footer, Row, Col, Button, LoadingBar } from 'iview'
import '../theme.less'

const component = {
  Layout,
  Header,
  Content,
  Footer,
  Row,
  Col,
  Button,
  LoadingBar
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
