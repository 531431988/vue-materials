import Vue from 'vue'
import { Layout, Header, Content, Footer, Row, Col, Button, LoadingBar, Card, Divider, Icon, BackTop } from 'iview'
import '../theme.less'
const component = {
  Layout,
  Header,
  Content,
  Footer,
  Row,
  Col,
  Button,
  LoadingBar,
  Card,
  Divider,
  Icon,
  BackTop
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
