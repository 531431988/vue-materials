<template>
  <div id="app">
    <a-affix :offsetTop="0">
      <a-button type="primary" @click="line = 'v'">垂直</a-button>
      <a-button type="primary" @click="line = 'h'">水平</a-button>
    </a-affix>
    <waterfall
      :grow="grow"
      :line="line"
      :line-gap="200"
      :min-line-gap="180"
      :max-line-gap="220"
      :watch="items"
      @reflowed="reflowed"
      ref="waterfall"
    >
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.index"
        move-class="item-move"
      >
        <div class="item" :style="item.style" :index="item.index"></div>
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
var lastIndex = 0
function generateRandomItems (count) {
  var items = []
  var i
  for (i = 0; i < count; i++) {
    items[i] = {
      index: lastIndex++,
      style: {
        background: getRandomColor()
      },
      width: 100 + ~~(Math.random() * 50),
      height: 100 + ~~(Math.random() * 50)
    }
  }
  return items
}

function getRandomColor () {
  var colors = [
    'rgba(21,174,103,.5)',
    'rgba(245,163,59,.5)',
    'rgba(255,230,135,.5)',
    'rgba(194,217,78,.5)',
    'rgba(195,123,177,.5)',
    'rgba(125,205,244,.5)'
  ]
  return colors[~~(Math.random() * colors.length)]
}

export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      line: 'v',
      grow: [3, 2, 1, 2],
      items: []
    }
  },
  created () {
    this.items = generateRandomItems(100)
  },
  methods: {
    reflowed () {
      console.log('完成')
    }
  }
}
</script>

<style lang="less" scoped>
.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
}
</style>
