<template>
  <div id="app">
    <Row :gutter="24">
      <Col span="12">
        <Card title="默认效果" class="mb10">
          <Skeleton/>
        </Card>
      </Col>
      <Col span="12">
        <Card title="组合效果" class="mb10">
          <Skeleton :avatar="true"/>
        </Card>
      </Col>
      <Col span="12">
        <Card title="动画效果" class="mb10">
          <Skeleton :avatar="true" :active="true"/>
        </Card>
      </Col>
      <Col span="12">
        <Card title="包含子组件" class="mb10">
          <Switch size="large" v-model="switch1" slot="extra" @on-change="e => loading = !loading">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
          </Switch>
          <Skeleton
            :loading="loading"
            :avatar="true"
            :active="true"
          >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）</Skeleton>
        </Card>
      </Col>
      <Col span="24">
        <Card title="循环列表">
          <Switch size="large" v-model="switch1" slot="extra" @on-change="e => loading = !loading">
            <span slot="open">开启</span>
            <span slot="close">关闭</span>
          </Switch>
          <Skeleton
            v-for="item in list"
            :key="item.name"
            :loading="loading"
            :avatar="true"
            :active="true"
            style="margin-bottom: 10px"
          >
            <Card>
              <Row>
                <Col span="2">
                  <avatar icon="ios-person"/>
                </Col>
                <Col span="20">{{item.detail}}</Col>
              </Row>
            </Card>
          </Skeleton>
        </Card>
      </Col>
    </Row>
    <br>
  </div>
</template>

<script>
import Skeleton from '_c/Skeleton'
export default {
  components: {
    Skeleton
  },
  data () {
    return {
      loading: false,
      switch1: false,
      list: [{
        name: '史蒂夫·乔布斯',
        detail: '史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。'
      }, {
        name: '斯蒂夫·盖瑞·沃兹尼亚克',
        detail: '斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。'
      }]
    }
  }
}
</script>

<style>
#app {
  padding: 5% 20%;
}
.mb10 {
  margin-bottom: 10px;
}
</style>
