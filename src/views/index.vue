<template>
  <div class="pd20">
    <Row :gutter="20">
      <Col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in list" :key="index">
        <Card shadow class="list-card">
          <div class="tc">
            <img :src="item.other.thumbnail">
            <Divider/>
            {{item.other.name}}
          </div>
          <div class="toolbar tc">
            <Button type="dashed" ghost class="mr20">预览</Button>
            <Button type="primary">查看代码</Button>
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
      list: []
    }
  },
  created () {
    this.$get('componentsTree.json').then(res => {
      this.list = res
      console.log(res)
    })
  }

}
</script>
<style lang="less">
.list-card {
  overflow: hidden;
  border-radius: 0;
  .ivu-divider {
    margin: 0;
  }
  .toolbar {
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    right: 0;
  }
}
</style>
