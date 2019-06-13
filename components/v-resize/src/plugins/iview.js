import Vue from 'vue'
import { Layout, Header, Content, Drawer, Menu, MenuItem, Button, Icon } from 'iview'
const component = {
  Layout,
  Header,
  Content,
  Drawer,
  Menu,
  MenuItem,
  Button,
  Icon
}
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})
