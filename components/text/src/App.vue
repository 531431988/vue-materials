<template>
  <div id="app">
    <a-row :gutter="24">
      <a-col span="12" class="mb10">
        <a-card title="行内文本样式">
          <v-text>默认文字颜色</v-text>
          <br>
          <v-text type="primary">主要文字颜色</v-text>&emsp;
          <v-text type="primary" size="18" color="red">可自定义大小或颜色，我本应是蓝色</v-text>
          <br>
          <v-text type="info">信息文字颜色</v-text>&emsp;
          <v-text type="success">成功文字颜色</v-text>&emsp;
          <v-text type="error">失败文字颜色</v-text>&emsp;
          <v-text type="warning">警告文字颜色</v-text>&emsp;
          <br>
          <v-text disabled>禁用文字样式</v-text>
          <br>
          <v-text bold>加粗文本样式</v-text>
          <br>
          <v-text mark>文字遮罩效果</v-text>&emsp;
          <v-text mark="#ffe58f">自定义文字遮罩颜色</v-text>
          <br>
          <v-text code>文字遮罩效果</v-text>&emsp;
          <v-text code="#ffe58f">自定义文字遮罩颜色</v-text>
          <br>
          <v-text underline>文字下划线</v-text>&emsp;
          <v-text underline type="warning">组合使用</v-text>
          <br>
          <v-text del>删除文字效果</v-text>&emsp;
          <v-text del type="error">组合使用</v-text>
        </a-card>
      </a-col>
      <a-col span="12">
        <a-card title="段落文本样式 及 组合样式">
          <v-text :inline="false">
            <v-text type="error">史蒂夫·乔布斯</v-text>（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
          </v-text>
          <br>
          <v-text
            :inline="false"
            ell="2"
          >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</v-text>
          <br>
          <v-text :inline="false">
            斯蒂夫·盖瑞·沃兹尼亚克
            <v-text del>（Stephen Gary Wozniak）</v-text>，
            <v-text mark="#ffe58f">美国电脑工程师</v-text>，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位
            （1987年）。
          </v-text>
        </a-card>
      </a-col>
    </a-row>
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
