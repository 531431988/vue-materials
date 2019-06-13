<template>
  <div id="app">
    <Layout>
      <Header style="padding: 0 15px">
        <div class="layout-logo">logo</div>
        <Button
          type="primary"
          icon="md-menu"
          v-if="width < 768"
          @click="onShow"
          style="float:right;margin-top:15px"
        ></Button>
        <div class="layout-nav" v-else>
          <Menu mode="horizontal" theme="dark">
            <MenuItem name="1">nav 1</MenuItem>
            <MenuItem name="2">nav 2</MenuItem>
            <MenuItem name="3">nav 3</MenuItem>
            <MenuItem name="4">nav 4</MenuItem>
            <MenuItem name="5">nav 5</MenuItem>
          </Menu>
        </div>
      </Header>
      <Content style="padding:50px">
        <div v-resize="resize">
          <p>缩小窗口试试</p>
          <p>当前窗口宽: {{width}}px</p>
          <p>当前窗口高: {{height}}px</p>
        </div>
<<<<<<< HEAD
      </a-layout-content>
    </a-layout>
  </a-layout-content>
=======
      </Content>
    </Layout>
    <Drawer placement="left" :closable="false" v-model="visible">
      <Menu>
        <MenuItem name="1">nav 1</MenuItem>
        <MenuItem name="2">nav 2</MenuItem>
      </Menu>
    </Drawer>
  </div>
>>>>>>> iview
</template>

<script>
export default {
  data () {
    return {
      width: 0,
      height: 0,
      visible: false
    }
  },
  methods: {
    resize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    },
    onShow () {
      this.visible = true
<<<<<<< HEAD
    },
    onClose () {
      this.visible = false
=======
>>>>>>> iview
    }
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }
}
</script>

<style lang="less">
#app {
<<<<<<< HEAD
  .ant-menu-vertical {
    border-right: none;
=======
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  .layout-logo {
    width: 100px;
    float: left;
    color: #fff;
  }
  .layout-nav {
    float: right;
    margin: 0 auto;
>>>>>>> iview
  }
}
</style>