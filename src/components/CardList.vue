<template>
  <a
    :href="`https://github.com/531431988/vue-component-library/tree/master/components/${data.info.name}`"
    target="_blank"
  >
    <Card shadow class="list-card mb20" :padding="0">
      <div class="tc">
        <img
          width="100%"
          style="height: 200px"
          :src="`https://531431988.github.io/vue-component-library/components/${data.info.name}/thumbnail.png`"
        >
        <Divider/>
        <div class="pb10">{{data.info.title}}</div>
        <svg xmlns="http://www.w3.org/2000/svg">
          <line class="top" x1="100%" y1="0" x2="200%" y2="0"></line>
          <line class="right" x1="100%" y1="100%" x2="100%" y2="200%"></line>
          <line class="bottom" x1="0" y1="100%" x2="-100%" y2="100%"></line>
          <line class="left" x1="0" y1="0" x2="0" y2="-100%"></line>
        </svg>
      </div>
      <div class="toolbar tc">
        <a
          :href="`https://531431988.github.io/vue-component-library/components/${data.info.name}/dist/index.html`"
          target="_blank"
        >
          <Button type="dashed" ghost class="mr20">预览</Button>
        </a>
        <a
          :href="`https://github.com/531431988/vue-component-library/tree/master/components/${data.info.name}`"
          target="_blank"
        >
          <Button type="primary">查看代码</Button>
        </a>
      </div>
    </Card>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>


<style lang="less" scoped>
.list-card {
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  .toolbar {
    transition: all 0.3s;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
    position: absolute;
    top: -100px;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 9;
  }
  &:hover {
    .toolbar {
      top: 0;
    }
    svg line {
      stroke: @primary-color;
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
    height: 100%;
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
</style>
<style lang="less">
.list-card {
  .ivu-divider {
    margin: 10px 0;
  }
}
</style>