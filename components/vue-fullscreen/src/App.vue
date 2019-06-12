<template>
  <div id="app">
    <vue-fullscreen ref="fullscreen" @change="fullscreenChange">
      <img
        src="https://di.res.netease.com/pc/gw/20181025184036/img/p9/normal/13_4435edb.jpg"
        @click="toggle"
      >
      <p>点击图片查看效果</p>
    </vue-fullscreen>
  </div>
</template>

<script>
import vueFullscreen from 'vue-fullscreen/src/component'
export default {
  components: {
    vueFullscreen
  },
  data () {
    return {
      fullscreen: false
    }
  },
  methods: {
    toggle () {
      this.$refs['fullscreen'].toggle()
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
  }
}
</style>
