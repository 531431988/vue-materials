<template>
  <div id="app">
    <a-row :gutter="24">
      <a-col span="24">
        <a-card title="谁被点击了">
          <a-button @click="onClick" v-click-outside="clickoutside">{{message}}</a-button>
          <h2>我是一个h2</h2>
          <p>我是一个P元素</p>
          <div>我是一个DIV元素</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      message: '谁被点击了'
    }
  },
  methods: {
    onClick (e) {
      this.message = `${e.target.tagName}被点击了`
    },
    clickoutside (e) {
      this.message = `${e.target.tagName}被点击了`
    }
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
}
</style>
