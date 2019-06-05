<template>
  <div id="app">
    <a-card title="dplayer">
      <d-player :options="options" @play="play" ref="player"></d-player>
      <a-button slot="extra" type="primary" @click="onSwitch">切换视频</a-button>
    </a-card>
  </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
  components: {
    'd-player': VueDPlayer
  },
  data () {
    return {
      options: {
        video: {
          url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        autoplay: true,
        contextmenu: []
      },
      player: null
    }
  },
  mounted () {
    this.player = this.$refs.player.dp
  },
  methods: {
    play () {
      console.log('play callback')
    },
    onSwitch () {
      this.player.switchVideo({
        url: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4'
      })
    }
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
  .dplayer-menu {
    .dplayer-menu-item {
      &:not(:first-child) {
        display: none !important;
      }
    }
  }
}
</style>
