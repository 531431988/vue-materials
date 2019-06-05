import Vue from 'vue'
import { Row, Col, Form, Input, Button, Icon, message } from 'ant-design-vue'
const formItem = Form.Item
const component = {
  Row,
  Col,
  Form,
  formItem,
  Input,
  Button,
  Icon
  // message
}
Object.keys(component).forEach(key => {
  Vue.component(component[key].name, component[key])
})

Vue.prototype.$message = message
