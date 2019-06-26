<template>
  <Row type="flex" justify="center" style="padding-top:50px">
    <Col span="4">
      <h2>点击模式</h2>
      <div>Token: {{ clickToken }}</div>
      <vue-vaptcha
        ref="clickCaptcha"
        v-model="clickToken"
        vid="5d087acbfc650e50dc77c687"
        color="#2d8cf0"
      ></vue-vaptcha>
      <br>
      <Button @click="$refs.clickCaptcha.vaptcha.reset()">重置</Button>
      <br>
      <br>
      <br>
      <h2>隐藏式</h2>
      <div>Token: {{ invisibleToken }}</div>
      <br>
      <vue-vaptcha vid="5d087acbfc650e50dc77c687" ref="invisible" type="invisible"></vue-vaptcha>
      <Button @click="onValidate">点击开始</Button>
    </Col>
    <Col span="4" offset="1">
      <h2>嵌入式</h2>
      <div>Token: {{ embedToken }}</div>
      <br>
      <vue-vaptcha
        ref="embedCaptcha"
        style="height: 200px"
        v-model="embedToken"
        vid="5d087acbfc650e50dc77c687"
        type="embed"
      ></vue-vaptcha>
      <br>
      <Button @click="$refs.embedCaptcha.vaptcha.reset()">重置</Button>
    </Col>
  </Row>
</template>

<script>
import vueVaptcha from '_c/vaptcha'
export default {
  components: {
    vueVaptcha
  },
  data () {
    return {
      embedToken: '',
      clickToken: '',
      invisibleToken: '',
      vaptcha: null
    }
  },
  mounted () {
    this.$refs.invisible.getInvisibleVaptcha().then(obj => {
      obj.listen('pass', () => {
        this.invisibleToken = obj.getToken()
      })
      this.vaptcha = obj
    })
  },
  methods: {
    onValidate () {
      this.vaptcha.validate()
    }
  }
}
</script>

<style>
.vp-about .vp-vertical-cont,
.vp-logo {
  display: none !important;
}
</style>
