<template>
  <div id="app">
    <a-row :gutter="24">
      <a-col span="12" class="mb15">
        <a-card title="title方式">
          <Empty title="暂无数据"/>
        </a-card>
      </a-col>
      <a-col span="12" class="mb15">
        <a-card title="slot方式">
          <Empty>
            <template slot="text">暂无数据</template>
          </Empty>
        </a-card>
      </a-col>
      <a-col span="12" class="mb15">
        <a-card title="简洁版">
          <Empty type="2">
            <template slot="text">暂无数据</template>
          </Empty>
        </a-card>
      </a-col>
      <a-col span="12" class="mb15">
        <a-card title="自定义图片">
          <Empty>
            <a-icon type="smile" style="font-size: 42px;margin-bottom: 10px"/>
            <template slot="text">自定义文字提示</template>
          </Empty>
        </a-card>
      </a-col>
    </a-row>
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
