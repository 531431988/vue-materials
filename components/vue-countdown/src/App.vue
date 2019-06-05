<template>
  <div id="app">
    <a-card title="基础用法">
      <vueCountdown :time="60000" :interval="100" tag="div">
        <template
          slot-scope="props"
        >距离活动开始还有： {{ props.seconds }} 秒 {{ Math.floor(props.milliseconds / 100) }} 毫秒</template>
      </vueCountdown>
      <br>
      <vueCountdown :time="time" :interval="1000" tag="div">
        <template
          slot-scope="props"
        >距离过年：{{ props.days }} 天 {{ props.hours }} 小时 {{ props.minutes }} 分 {{ props.seconds }} 秒</template>
      </vueCountdown>
      <br>
      <vueCountdown :time="time" tag="p">
        <template
          slot-scope="props"
        >距离圣诞节: 共 {{ props.totalDays }} 天 / 共 {{ props.totalHours }} 小时 / 共 {{ props.totalMinutes }} 分钟 / 共 {{ props.totalSeconds }} 秒 / 共 {{ props.totalMilliseconds }} 毫秒</template>
      </vueCountdown>
    </a-card>
    <br>
    <br>
    <a-card title="扩展应用">
      <vueCountdown :time="time" :interval="1000" tag="div">
        <template slot-scope="props">
          距离过年：
          <span class="item">{{ props.days }}</span> 天
          <span class="item">{{ props.hours }}</span> 小时
          <span class="item">{{ props.minutes }}</span> 分
          <span class="item">{{ props.seconds }}</span> 秒
        </template>
      </vueCountdown>
      <br>
      <a-button type="primary" :disabled="disabled" @click="onStart">
        <vueCountdown v-if="disabled" :time="6000" @end="onEnd">
          <template slot-scope="props">重新发送验证码 {{ props.totalSeconds }}</template>
        </vueCountdown>
        <span v-else>发送验证码</span>
      </a-button>
    </a-card>
  </div>
</template>

<script>
import vueCountdown from '@chenfengyuan/vue-countdown'
export default {
  components: {
    vueCountdown
  },
  data () {
    var now = new Date()
    var newYear = new Date(now.getFullYear() + 1, 0, 1)

    return {
      disabled: false,
      time: newYear - now
    }
  },
  methods: {
    onStart () {
      this.disabled = true
    },
    onEnd () {
      this.disabled = false
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  margin: 5% 20%;
  .item {
    font-size: 18px;
    color: red;
  }
}
</style>
