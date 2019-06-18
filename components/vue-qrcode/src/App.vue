<template>
  <Row type="flex" justify="center" style="padding-top:50px">
    <Col span="6">
      <h2>
        <a href="https://fengyuanchen.github.io/vue-qrcode/">vue-qrcode api</a>
      </h2>
      <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode/"></vue-qrcode>
      <vue-qrcode
        value="https://fengyuanchen.github.io/vue-qrcode/"
        :options="{ color: { dark: '#0275d8' } }"
      ></vue-qrcode>
      <vue-qrcode value="https://fengyuanchen.github.io/vue-qrcode/" tag="img"></vue-qrcode>
    </Col>
  </Row>
</template>

<script>
import vueQrcode from '@chenfengyuan/vue-qrcode'
export default {
  components: {
    vueQrcode
  }
}
</script>

<style>
#app {
  padding: 5% 20%;
}
</style>
