<template>
  <div>
    <div class="banner tc">
      <h2>海量的组件库</h2>
      <p>基于IVIEW UI 框架进行快速组合搭建应用，减少重复的开发，提升效率</p>
    </div>
    <div class="pd20">
      <Row :gutter="20">
        <Col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in list" :key="index">
          <Card shadow class="list-card" :padding="0">
            <div class="tc">
              <img width="100%" :src="item.info.thumbnail">
              <Divider/>
              <div class="pb10">{{item.info.title}}</div>
            </div>
            <div class="toolbar tc">
              <a :href="item.info.url" target="_blank">
                <Button type="dashed" ghost class="mr20">预览</Button>
              </a>
              <a :href="item.info.source" target="_blank">
                <Button type="primary">查看代码</Button>
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
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
.banner {
  padding: 50px 0;
}
.list-card {
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  .ivu-divider {
    margin: 10px 0;
  }
  .toolbar {
    transition: all 0.3s;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
    position: absolute;
    top: -100px;
    width: 100%;
    left: 0;
    right: 0;
  }
  &:hover {
    .toolbar {
      top: 0;
    }
  }
}
</style>
