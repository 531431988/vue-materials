<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="8">
        <Loading type="1"/>
      </Col>
      <Col span="8">
        <Loading type="2"/>
      </Col>
      <Col span="8">
        <Loading type="3"/>
      </Col>
    </Row>
    <br>
    <br>
    <Row :gutter="24">
      <Col span="8">
        <Loading type="4"/>
      </Col>
      <Col span="8">
        <Loading type="5"/>
      </Col>
      <Col span="8">
        <Loading type="6"/>
      </Col>
    </Row>
    <br>
    <br>
    <Card title="配合Spin组件使用效果">
      <h3>登金陵凤凰台</h3>
      <address>李白</address>
      <article>
        <p>凤凰台上凤凰游，凤去台空江自流。</p>
        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
        <p>三山半落青天外，二水中分白鹭洲。</p>
        <p>总为浮云能蔽日，长安不见使人愁。</p>
      </article>
      <Spin fix v-if="spinShow">
        <Loading type="6"/>
      </Spin>
    </Card>
    <br>切换显示状态：
    <Switch @on-change="spinShow = !spinShow"></Switch>
  </div>
</template>

<script>
import Loading from '_c/Loading'
export default {
  components: {
    Loading
  },
  data () {
    return {
      spinShow: true
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#app {
  margin: 5% 30%;
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
