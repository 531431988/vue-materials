<template>
  <div id="app">
    <a-card title="波纹效果">
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="6" v-ripple>
          <img src="https://muse-ui.org/img/sun.a646a52d.jpg" width="100%">
        </a-col>
        <a-col :span="6" v-ripple>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" width="100%">
        </a-col>
      </a-row>
      <br>
      <br>
      <a-list itemLayout="horizontal">
        <a-list-item v-ripple>
          <a-list-item-meta description="一个基于v-ripple的点击波纹效果">
            <div slot="title">默认效果</div>
            <a-avatar
              slot="avatar"
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
        <a-list-item v-ripple="'rgba(255, 0, 0, 0.15)'">
          <a-list-item-meta description="一个基于v-ripple的点击波纹效果">
            <div slot="title">自定义颜色</div>
            <a-avatar
              slot="avatar"
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#app {
  margin: 5% 20%;
}
</style>
