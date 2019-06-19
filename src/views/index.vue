<template>
  <div>
    <Banner @on-change="onSearch" ref="banner"/>
    <Button
      type="primary"
      icon="md-menu"
      @click="visible = true"
      v-if="width < 768"
      style="position:fixed; right: 16px;top:16px;z-index:99"
    ></Button>
    <tag-list :data="tags" @on-click="onClick" v-else/>
    <div class="pd20">
      <Row :gutter="24" v-if="list.length">
        <Col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in list" :key="index">
          <card-list :data="item"></card-list>
        </Col>
      </Row>
      <div class="pt50" v-else style="min-height: 300px">
        <Empty title="暂无数据"/>
      </div>
    </div>
    <Drawer placement="left" :closable="false" v-model="visible">
      <Button
        :type="item.checked ? 'primary' : 'dashed'"
        v-for="(item, index) in tags"
        :key="index"
        @click="onClick(item, index)"
        style="margin: 5px"
      >{{item.label}} {{item.number}}</Button>
    </Drawer>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Banner from '_c/Banner'
import TagList from '_c/TagList'
import CardList from '_c/CardList'
import Empty from '_c/Empty'
export default {
  components: {
    Banner,
    TagList,
    CardList,
    Empty
  },
  data () {
    return {
      allData: [],
      list: [],
      tags: [],
      visible: false,
      width: window.innerWidth
    }
  },
  created () {
    let tags = []
    let reduce = null
    this.$get('componentsTree.json').then(res => {
      this.allData = res
      this.list = res
      res.forEach(item => {
        tags = [...tags, ...item.info.tags]
      })
      // 获取标签与次数
      reduce = tags.reduce((item, index) => {
        item[index] ? item[index]++ : item[index] = 1
        return item
      }, {})
      for (let i in reduce) {
        this.tags.push({
          label: i,
          number: reduce[i],
          checked: false
        })
      }
      // 生成去重后的tag标签
      // tags = Array.from(new Set(tags))
      // tags.forEach(item => {
      //   this.tags.push({
      //     label: item,
      //     checked: false
      //   })
      // })
      this.tags.unshift({
        label: '全部',
        checked: true,
        number: this.allData.length
      })
    })
  },
  methods: {
    // 筛选数据
    onClick (item, index) {
      this.$refs.banner.keyword = ''
      this.tags.map(child => {
        child.checked = false
      })
      item.checked = !item.checked
      if (index) {
        this.list = []
        this.allData.forEach(child => {
          if (child.info.tags.indexOf(item.label) > -1) {
            this.list.push(child)
          }
        })
      } else {
        this.list = this.allData
      }
      this.visible = false
    },
    onSearch (keyword) {
      this.list = []
      this.allData.forEach(item => {
        if (item.info.title.indexOf(keyword) !== -1) {
          this.list.push(item)
        }
      })
    }
  },
  mounted () {
    window.onresize = () => {
      this.width = window.innerWidth
      this.visible = false
    }
  }

}
</script>
