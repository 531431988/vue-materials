<template>
  <div class="vue-empty">
    <div v-if="$slots.default">
      <slot></slot>
    </div>
    <div v-else>
      <img :src="src">
    </div>
    <div v-if="$slots.text">
      <slot name="text"></slot>
    </div>
    <div v-else>{{title}}</div>
  </div>
</template>

<script>
import emptyDefault from '@/assets/default.png'
import emptySimple from '@/assets/simple.png'
export default {
  props: {
    title: {
      type: String,
      default: '暂无数据'
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      src: this.type === '1' ? emptyDefault : emptySimple
    }
  }
}
</script>
<style lang="less" scoped>
.vue-empty {
  text-align: center;
  color: @text-color;
}
</style>
