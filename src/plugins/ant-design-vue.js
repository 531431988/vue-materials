import Vue from 'vue'
import { Layout } from 'ant-design-vue'
import '../theme.less'
const { Header, Content, Footer } = Layout
// const { Row, Col } = Grid
const component = {
  Layout,
  Header,
  Content,
  Footer
  // Row,
  // Col
  // Button,
  // Card,
  // Divider,
  // Icon,
  // BackTop
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
