<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="24">
        <Card title="监听窗口变化">
          <div v-resize="resize">
            <Button>当前窗口宽: {{width}}px</Button>
            <Button>当前窗口高: {{height}}px</Button>
            <p>斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  methods: {
    resize (e) {
      console.log(e)
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  },
  mounted () {
    this.width = window.innerWidth
    this.height = window.innerHeight
  }
}
</script>

<style lang="less">
#app {
  margin: 10% 20%;
}
</style>
