<template>
  <div id="app">
    <Chip>默认效果</Chip>

    <Chip>
      <a-avatar slot="avatar" icon="smile"/>组合效果
    </Chip>

    <Chip type="primary">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>primary
    </Chip>

    <Chip type="info">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>info
    </Chip>

    <Chip type="success">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>success
    </Chip>
    <br>
    <br>
    <Chip type="warning">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>warning
    </Chip>

    <Chip type="error">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>error
    </Chip>

    <Chip style="background: #1DA57A;color:#fff">
      <a-avatar slot="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>自定义颜色
    </Chip>

    <Chip style="background: #000;color:#fff">
      <a-avatar slot="avatar" style="background-color: #87d068" icon="meh"/>
      <a-icon slot="icon" type="close-circle"/>可关闭
    </Chip>
  </div>
</template>

<script>
import Chip from '_c/Chip'
export default {
  components: {
    Chip
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
  .vui-chip {
    margin: 0 10px 10px 0;
  }
}
</style>
