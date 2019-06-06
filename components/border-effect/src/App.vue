<template>
  <div id="app">
    <a-row type="flex" :gutter="24">
      <a-col :span="8" v-for="(item,index) in list" :key="index">
        <border-effect>
          <a-card>
            <img alt="example" :src="item.src" slot="cover">
            <a-card-meta :title="item.title" :description="item.description">
              <a-avatar slot="avatar" :src="item.avatar"/>
            </a-card-meta>
          </a-card>
        </border-effect>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import borderEffect from '_c/border-effect'
export default {
  components: {
    borderEffect
  },
  data () {
    return {
      list: [{
        src: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title: '这是标题',
        description: '这是描述信息',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
      }]
    }
  },
  created () {
    this.list.length = 3
    this.list = this.list.fill(this.list[0])
  }
}
</script>

<style lang="less">
#app {
  margin: 10% 20%;
}
</style>
