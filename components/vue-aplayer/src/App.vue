<template>
  <div id="app">
    <aplayer
      :music="{
          title: '平凡之路',
          artist: '沈腾',
          src: 'http://www.ytmp3.cn/down/59213.mp3',
          pic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2200070198,2399503966&fm=11&gp=0.jpg'
        }"
    />
    <br>
    <aplayer
      autoplay
      theme="pic"
      shuffle
      repeat="list"
      show-lrc
      :muted.sync="muted"
      :volume.sync="volume"
      :music="list3[0]"
      :list="list3"
    />
    <br>
    <aplayer
      mini
      float
      :music="{
          title: '平凡之路',
          artist: '沈腾',
          src: 'http://www.ytmp3.cn/down/59213.mp3',
          pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=570596927,2191765078&fm=11&gp=0.jpg'
        }"
    />
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  components: {
    Aplayer
  },
  data () {
    return {
      volume: 1,
      muted: false,
      music3: null,
      list3: [
        {
          title: '平凡之路',
          artist: '沈腾',
          src: 'http://www.ytmp3.cn/down/59213.mp3',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559642349327&di=c1a89b4032502d7c3e75722c3e94f90d&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-5671aec2f8a7969f7e9418bfbb8234a4_hd.jpg',
          lrc: ''
        }, {
          title: '绿色',
          artist: '陈雪凝',
          src: 'http://www.ytmp3.cn/down/59015.mp3',
          pic: 'http://img.ytmp3.cn/image/3.jpg',
          lrc: ''
        }

      ]
    }
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
}
</style>
