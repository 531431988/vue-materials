<template>
  <div id="app">
    <div class="example">
      <img src="./assets/13_4435edb.jpg">
      <br>
      <Button @click="toggle">点击图片查看效果</Button>&emsp;
      <a href="https://github.com/mirari/vue-fullscreen">查看API</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullscreen: false
    }
  },
  methods: {
    toggle () {
      this.$fullscreen.toggle(this.$el.querySelector('.example'), {
        wrap: false,
        callback: this.fullscreenChange
      })
    },
    fullscreenChange (fullscreen) {
      this.fullscreen = fullscreen
    }
  }

}
</script>

<style lang="less">
#app {
  text-align: center;
  img {
    width: 50%;
    display: block;
    margin: 0 auto;
  }
}
</style>
