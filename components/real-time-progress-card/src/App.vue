<template>
  <Row type="flex" justify="center" style="padding-top:50px">
    <Col span="18">
      <Row :gutter="24">
        <Col span="6" v-for="(item, index) in data" :key="index">
          <real-time-progress-card :data="item"></real-time-progress-card>
        </Col>
      </Row>
    </Col>
  </Row>
</template>

<script>
import RealTimeProgressCard from '_c/RealTimeProgressCard'
export default {
  components: {
    RealTimeProgressCard
  },
  data () {
    return {
      data: [{
        title: '实时下单数（单）',
        total: 1602,
        contrast: true,
        percent: 54,
        color: '#2d8cf0'
      }, {
        title: '实时浏览量（次）',
        total: 9698,
        contrast: false,
        percent: 76,
        color: '#19be6b'
      }, {
        title: '今日交易量（元）',
        total: 62608,
        contrast: false,
        percent: 33,
        color: '#ff9900'
      }, {
        title: '今日关注量（人）',
        total: 2936,
        contrast: true,
        percent: 80,
        color: '#ed4014'
      }]
    }
  }
}
</script>


