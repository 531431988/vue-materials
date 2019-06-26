<template>
  <Card class="real-time-card">
    <p class="title">{{data.title}}</p>
    <h1 class="total">
      <count-up :end="data.total" :useGrouping="true"/>
    </h1>
    <Row type="flex" align="middle">
      <div style="flex: 1">与昨日对比</div>
      <Icon
        size="22"
        :type="data.contrast ? 'md-arrow-dropup' : 'md-arrow-dropdown'"
        :color="data.contrast ? '#ed4014' : '#19be6b'"
      />
    </Row>
    <br>
    <Progress :percent="data.percent" :stroke-width="5" :stroke-color="data.color"/>
  </Card>
</template>

<script>
import CountUp from '_c/CountUp'
export default {
  props: {
    data: {
      type: Object,
      default () {
        return null
      }
    }
  },
  components: {
    CountUp
  }
}
</script>

<style lang="less" scoped>
.real-time-card {
  color: #666;
  .title {
    font-size: 22px;
  }
  .total {
    color: #333;
    margin: 5px 0 10px;
    font-size: 32px;
  }
}
</style>
