<template>
  <div id="app">
    <Card title="波纹效果">
      <Button v-ripple>点击显示</Button>
      <Button v-ripple.mouseover.500>移动显示</Button>
      <Button type="primary" v-ripple="'rgba(255, 255, 255, 0.35)'">自定义颜色</Button>
      <br>
      <br>
      <div v-ripple style="display:inline-block">
        <img src="https://muse-ui.org/img/sun.a646a52d.jpg" width="200">
      </div>
      <br>
      <Card title="选项" icon="ios-options" :padding="0">
        <CellGroup>
          <Cell v-ripple title="标题和副标题" label="副标题说明"/>
          <Cell v-ripple title="显示右侧内容" extra="详情"/>
          <Cell title="禁用状态" disabled/>
          <Cell v-ripple title="默认选中" selected/>
          <Cell v-ripple title="右侧显示徽章效果">
            <Badge :count="10" slot="extra"/>
          </Cell>
        </CellGroup>
      </Card>
    </Card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
#app {
  margin: 5% 20%;
}
</style>
