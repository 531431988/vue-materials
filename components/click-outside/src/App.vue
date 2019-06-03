<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="24">
        <Card title="谁被点击了">
          <Button @click="onClick" v-click-outside="clickoutside">{{message}}</Button>
          <h2>我是一个h2</h2>
          <p>我是一个P元素</p>
          <div>我是一个DIV元素</div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      message: '谁被点击了',
      width: 0,
      height: 0,
      scrollTop: 0
    }
  },
  methods: {
    onClick (e) {
      this.message = `${e.target.tagName}被点击了`
    },
    clickoutside (e) {
      this.message = `${e.target.tagName}被点击了`
    },
    resize () {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.scrollTop = window.scrollY
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
}
</style>
