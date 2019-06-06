<template>
  <a-layout-content id="app">
    <a-layout>
      <a-layout-header style="background: #fff">
        <a-drawer
          placement="left"
          :closable="false"
          :visible="visible"
          @close="onClose"
          getContainer="#app"
        >
          <a-menu>
            <a-menu-item key="1">nav 1</a-menu-item>
            <a-menu-item key="2">nav 2</a-menu-item>
          </a-menu>
        </a-drawer>
        <a-button type="primary" icon="bars" v-if="width < 768" @click="onShow"></a-button>
        <a-menu mode="horizontal" :style="{ lineHeight: '64px' }" v-else>
          <a-menu-item key="1">nav 1</a-menu-item>
          <a-menu-item key="2">nav 2</a-menu-item>
          <a-menu-item key="3">nav 3</a-menu-item>
          <a-menu-item key="4">nav 4</a-menu-item>
          <a-menu-item key="5">nav 5</a-menu-item>
          <a-menu-item key="6">nav 6</a-menu-item>
          <a-menu-item key="7">nav 7</a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding:50px">
        <div v-resize="resize">
          <p>缩小窗口试试</p>
          <p>当前窗口宽: {{width}}px</p>
          <p>当前窗口高: {{height}}px</p>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
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
    },
    onClose () {
      this.visible = false
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
  .ant-menu-vertical {
    border-right: none;
  }
}
</style>
