<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="12" class="mb15">
        <Card title="title方式">
          <Empty title="暂无数据"/>
        </Card>
      </Col>
      <Col span="12" class="mb15">
        <Card title="slot方式">
          <Empty>
            <template slot="text">暂无数据</template>
          </Empty>
        </Card>
      </Col>
      <Col span="12" class="mb15">
        <Card title="简洁版">
          <Empty type="2">
            <template slot="text">暂无数据</template>
          </Empty>
        </Card>
      </Col>
      <Col span="12" class="mb15">
        <Card title="自定义图片">
          <Empty>
            <Icon type="ios-happy-outline" size="48"/>
            <template slot="text">自定义文字提示</template>
          </Empty>
        </Card>
      </Col>
    </Row>
  </div>
</template>
          </Empty>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Empty from '_c/Empty'
export default {
  components: {
    Empty
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  margin: 5% 20%;
}
.mb15 {
  margin-bottom: 15px;
}
</style>
