<template>
  <div id="app">
    <Row :gutter="24" type="flex" justify="center">
      <Col span="8" v-for="(item, index) in list" :key="index">
        <Card shadow>
          <div>
            <Row type="flex">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="large"/>
              <div style="margin-left: 10px;">
                <v-text size="18">{{item.name}}</v-text>
                <p>
                  <v-text color="#999">{{item.info}}</v-text>
                </p>
              </div>
            </Row>
            <img :src="item.src" height="200" width="100%" style="margin: 20px 0">
            <v-text :inline="false" size="22">{{item.title}}</v-text>
            <v-text ell="3" :inline="false" style="margin: 20px 0">{{item.detail}}</v-text>
            <Button type="primary" style="margin-right: 10px">查看详情</Button>
            <Button>关注</Button>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import Text from '_c/Text'
export default {
  components: {
    'v-text': Text
  },
  data () {
    return {
      list: [{
        name: '小明同学',
        info: '我是小明同学',
        src: 'https://muse-ui.org/img/sun.a646a52d.jpg',
        title: '个人简介',
        detail: '散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！'
      }]
    }
  },
  created () {
    this.list.length = 3
    this.list.fill(this.list[0])
  }
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
#app {
  padding: 5% 20%;
  background: #000;
}
</style>
