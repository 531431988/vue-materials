<template>
  <Card shadow class="tags">
    <Button
      :type="item.checked ? 'primary' : 'dashed'"
      shape="circle"
      v-for="(item, index) in data"
      :key="index"
      @click="onClick(item, index)"
    >{{item.label}} {{item.number}}</Button>
  </Card>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClick (item, index) {
      this.$emit('on-click', item, index)
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  border-radius: 0;
  .ivu-btn {
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>
