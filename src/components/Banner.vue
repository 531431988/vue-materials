<template>
  <Row class="banner tc" type="flex" justify="center">
    <Col span="6">
      <Input
        v-model="keyword"
        search
        enter-button="搜索"
        size="large"
        placeholder="请输入搜索关键字"
        @on-change="onChange"
      />
      <p class="mt10">快速组合搭建应用，减少重复的开发，提升效率</p>
    </Col>
  </Row>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    onChange () {
      this.$emit('on-change', this.keyword)
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  padding: 100px 0;
  background: url(../assets/banner.svg) center no-repeat #fff;
  background-size: cover;
}
</style>
