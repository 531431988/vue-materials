<template>
  <div id="app">
    <a-row :gutter="24">
      <a-col span="8">
        <Loading type="1"/>
      </a-col>
      <a-col span="8">
        <Loading type="2"/>
      </a-col>
      <a-col span="8">
        <Loading type="3"/>
      </a-col>
    </a-row>
    <br>
    <br>
    <a-row :gutter="24">
      <a-col span="8">
        <Loading type="4"/>
      </a-col>
      <a-col span="8">
        <Loading type="5"/>
      </a-col>
      <a-col span="8">
        <Loading type="6"/>
      </a-col>
    </a-row>
    <br>
    <br>
    <a-card title="配合Spin组件使用效果">
      <a-switch slot="extra" checkedChildren="显示" unCheckedChildren="隐藏" v-model="spinning"></a-switch>
      <a-spin :spinning="spinning" :delay="delayTime">
        <div>
          <h3>登金陵凤凰台</h3>
          <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
          </article>
        </div>
        <Loading slot="indicator" type="6" text/>
      </a-spin>
    </a-card>
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
      spinning: false,
      delayTime: 500
    }
  },
  methods: {
    changeSpinning () {
      this.spinning = !this.spinning
    }
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
