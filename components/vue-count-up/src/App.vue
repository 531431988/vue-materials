<template>
  <div id="app">
    <h3>
      基于countUp.js
      <a href="https://github.com/inorganik/countUp.js">API请查看</a>
    </h3>

    <a-row :gutter="14">
      <a-col span="8">
        <a-card title="count-up组件基础用法">
          <count-up :end="2534.368" :decimals="2"/>
        </a-card>
      </a-col>
      <a-col span="8">
        <a-card title="可添加左右文字">
          <count-up :end="2534" :useGrouping="true">
            <span slot="left">总金额:&nbsp;</span>
            <span slot="right">&nbsp;元</span>
          </count-up>
        </a-card>
      </a-col>
      <a-col span="8" class="padding-left-10">
        <a-card title="自定义样式">
          <count-up :end="2534" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">共计:&nbsp;</span>
            <span class="slot-text" slot="right">&nbsp;秒</span>
          </count-up>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="14" style="margin-top: 14px;">
      <a-col span="8" class="padding-left-10">
        <a-card title="设置数据格式">
          <count-up :end="2534" count-class="count-text" unit-class="unit-class" :decimals="2">
            <span class="slot-text" slot="left">Total:&nbsp;</span>
            <span class="slot-text" slot="right">&nbsp;times</span>
          </count-up>
        </a-card>
      </a-col>
      <a-col span="8" class="padding-left-10">
        <a-card title=" 可异步更新数据">
          <count-up :end="asynEndVal" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">Total:&nbsp;</span>
            <span class="slot-text" slot="right">&nbsp;times</span>
          </count-up>
        </a-card>
      </a-col>
      <a-col span="8">
        <a-card title="转换单位简化数据">
          <count-up :simplify="true" :end="2534" count-class="count-text" unit-class="unit-class">
            <span class="slot-text" slot="left">Total:&nbsp;</span>
            <span class="slot-text" slot="right">&nbsp;times</span>
          </count-up>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="14" style="margin-top: 14px;">
      <a-col span="18" class="padding-left-10">
        <a-card title="自定义单位">
          <count-up
            :simplify="true"
            :unit="unit"
            :end="253"
            count-class="count-text"
            unit-class="unit-class"
          >
            <span class="slot-text" slot="left">原始数据：253&nbsp;=>&nbsp;</span>
          </count-up>
          <count-up
            :simplify="true"
            :unit="unit"
            :end="2534"
            count-class="count-text"
            unit-class="unit-class"
          >
            <span class="slot-text" slot="left">原始数据：2534&nbsp;=>&nbsp;</span>
          </count-up>
          <count-up
            :simplify="true"
            :unit="unit"
            :end="257678"
            count-class="count-text"
            unit-class="unit-class"
          >
            <span class="slot-text" slot="left">原始数据：257678&nbsp;=>&nbsp;</span>
          </count-up>
        </a-card>
      </a-col>
      <a-col span="6">
        <a-card title="综合实例">
          <count-up
            :delay="500"
            :simplify="true"
            :unit="unit2"
            :end="integratedEndVal"
            count-class="count-text"
            unit-class="unit-class"
          >
            <span class="slot-text" slot="left">原始数据:&nbsp;{{ integratedEndVal }}&nbsp;=>&nbsp;</span>
            <span class="slot-text" slot="right">&nbsp;times</span>
          </count-up>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CountUp from '_c/CountUp'
export default {
  components: {
    CountUp
  },
  data () {
    return {
      end: 0,
      unit: [[3, '千多'], [4, '万多'], [5, '十万多']],
      unit2: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
      asynEndVal: 487,
      integratedEndVal: 3
    }
  },
  methods: {
    init () {
      setInterval(() => {
        this.asynEndVal += parseInt(Math.random() * 20)
        this.integratedEndVal += parseInt(Math.random() * 30)
      }, 2000)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
}
.count-text {
  font-size: 32px;
  color: @primary-color;
}
.slot-text {
  font-size: 16px;
}
.unit-class {
  font-size: 16px;
  color: @error-color;
}
</style>
