import Vue from 'vue'
import {
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
  Drawer,
  BackTop
} from 'iview'
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
  Drawer,
  BackTop
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
