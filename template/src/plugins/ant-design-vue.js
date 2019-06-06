import Vue from 'vue'
import { Layout, Menu, Button, Icon, Drawer } from 'ant-design-vue'
const { Header, Content } = Layout
const component = {
  Layout,
  Header,
  Content,
  Menu,
  Button,
  Icon,
  Drawer
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})
Vue.component(Menu.Item.name, Menu.Item)
