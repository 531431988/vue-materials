<template>
  <div>
    <div class="banner tc">
      <h1>一个基于Ant Design框架的海量组件库</h1>
      <p class="mt10">快速组合搭建应用，减少重复的开发，提升效率</p>
    </div>
    <a-card class="tags" :bordered="false">
      <a-button
        :type="item.checked ? 'primary' : 'dashed'"
        v-for="(item, index) in tags"
        :key="index"
        @click="onClick(item, index)"
      >{{item.label}} {{item.number}}</a-button>
    </a-card>
    <div class="pd20">
      <a-row type="flex" :gutter="24">
        <a-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item, index) in list" :key="index">
          <a-card class="list-card" hoverable :loading="loading" :bodyStyle="{padding: '10px'}">
            <template slot="cover">
              <img
                width="100%"
                style="height: 200px"
                :src="`https://531431988.github.io/vue-component-library/components/${item.info.name}/thumbnail.png`"
              >
              <a-divider/>
            </template>
            <div class="tc">
              <div>{{item.info.title}}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg">
              <line class="top" x1="100%" y1="0" x2="200%" y2="0"></line>
              <line class="right" x1="100%" y1="100%" x2="100%" y2="200%"></line>
              <line class="bottom" x1="0" y1="100%" x2="-100%" y2="100%"></line>
              <line class="left" x1="0" y1="0" x2="0" y2="-100%"></line>
            </svg>
            <div class="toolbar tc">
              <a
                :href="`https://531431988.github.io/vue-component-library/components/${item.info.name}/dist/index.html`"
                target="_blank"
              >
                <a-button type="dashed" ghost class="mr20">预览</a-button>
              </a>
              <a
                :href="`https://github.com/531431988/vue-component-library/tree/master/components/${item.info.name}`"
                target="_blank"
              >
                <a-button type="primary">查看代码</a-button>
              </a>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <a-back-top/>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      allData: [],
      list: [],
      tags: [],
      loading: true
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
      this.loading = false
    })
  },
  methods: {
    // 筛选数据
    onClick (item, index) {
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
    }
  }

}
</script>
<style lang="less" scoped>
.banner {
  padding: 100px 0;
  background: url(../assets/banner.svg) center no-repeat #fff;
  background-size: cover;
}
.list-card {
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  .toolbar {
    transition: all 0.3s;
    background: rgba(0, 0, 0, 0.3);
    padding: 10px 0;
    position: absolute;
    top: -100px;
    width: 100%;
    left: 0;
    right: 0;
    a {
      position: relative;
      z-index: 10;
    }
  }
  &:hover {
    .toolbar {
      top: 0;
    }
    svg line {
      stroke: #1890ff;
      transition-delay: 0.1s;
      &.top {
        transform: translateX(-100%);
      }

      &.bottom {
        transform: translateX(100%);
      }

      &.left {
        transform: translateY(100%);
      }

      &.right {
        transform: translateY(-100%);
      }
    }
  }
  svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    line {
      stroke-width: 4;
      stroke: @primary-color;
      fill: none;
      transition: all 0.8s ease-in-out;
      stroke-dasharray: 9999;
    }
  }
}
.tags {
  border-radius: 0;
  .ant-btn {
    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>
<style lang="less">
.list-card {
  .ant-divider {
    margin: 0;
  }
}
</style>
