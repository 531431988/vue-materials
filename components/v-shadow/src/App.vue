<template>
  <div id="app">
    <Card title="内置阴影指令">
      <Row type="flex" :gutter="24" style="background: #f8f8f8;padding:20px">
        <div
          style="width: 60px;height:60px;margin:30px;background: #fff;"
          v-for="i in 24"
          :key="i"
          v-shadow="i"
        ></div>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="less">
#app {
  margin: 5% 20%;
}
</style>
