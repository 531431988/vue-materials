<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="12" class="mb10">
        <Card title="默认标题">
          <Title>h1 - 标题 文本的基本格式</Title>
          <Title :level="2">h2 - 标题 文本的基本格式</Title>
          <Title :level="3">h3 - 标题 文本的基本格式</Title>
          <Title :level="4">h4 - 标题 文本的基本格式</Title>
          <Title :level="5">h5 - 标题 文本的基本格式</Title>
          <Title :level="6">h6 - 标题 文本的基本格式</Title>
        </Card>
      </Col>
      <Col span="12" class="mb10">
        <Card title="无加粗标题">
          <Title :bold="false">h1 - 标题 文本的基本格式</Title>
          <Title :bold="false" :level="2">h2 - 标题 文本的基本格式</Title>
          <Title :bold="false" :level="3">h3 - 标题 文本的基本格式</Title>
          <Title :bold="false" :level="4">h4 - 标题 文本的基本格式</Title>
          <Title :bold="false" :level="5">h5 - 标题 文本的基本格式</Title>
          <Title :bold="false" :level="6">h6 - 标题 文本的基本格式</Title>
        </Card>
      </Col>
      <Col span="12" class="mb10">
        <Card title="自定义大小与颜色">
          <Title size="12">12号 加粗 标题</Title>
          <Title :bold="false" size="18" color="#2d8cf0">无加粗18号标题 蓝色</Title>
          <Title :bold="false" size="24" color="#19be6b">无加粗18号标题 绿色</Title>
          <Title :bold="false" size="26" color="#ed4014">无加粗18号标题 红色</Title>
        </Card>
      </Col>
      <Col span="12" class="mb10">
        <Card title="卡片类型标题">
          <div style="background: #f8f8f8; padding: 10px">
            <Title level="4" :bold="false" card="line">线型标题</Title>
            <br>
            <Title level="4" card="dot">点型标题</Title>
            <br>

            <Title level="4" :bold="false" :card="true">
              <Icon type="md-happy"/>&nbsp;自定义图标
              <Button type="error" slot="extra">更多</Button>
            </Title>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Title from '_c/Title'
export default {
  components: {
    Title
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
#app {
  margin: 5% 20%;
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
