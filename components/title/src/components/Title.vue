<template>
  <div class="vui-typography">
    <template v-if="card">
      <div :class="`vui-title-card ${classNameTitle}`" :style="style">
        <div :class="`vui-title vui-title-line`" v-if="card === 'line'">
          <slot></slot>
        </div>
        <div :class="`vui-title vui-title-dot`" v-if="card === 'dot'">
          <slot></slot>
        </div>
        <div :class="`vui-title`" v-if="card !=='line' && card !=='dot'">
          <slot></slot>
        </div>

        <div class="vui-title-extra">
          <slot name="extra"></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <h1 :class="classNameTitle" v-if="level === 1" :style="style">
        <slot></slot>
      </h1>
      <h2 :class="classNameTitle" v-if="level === 2" :style="style">
        <slot></slot>
      </h2>
      <h3 :class="classNameTitle" v-if="level === 3" :style="style">
        <slot></slot>
      </h3>
      <h4 :class="classNameTitle" v-if="level === 4" :style="style">
        <slot></slot>
      </h4>
      <h5 :class="classNameTitle" v-if="level === 5" :style="style">
        <slot></slot>
      </h5>
      <h6 :class="classNameTitle" v-if="level === 6" :style="style">
        <slot></slot>
      </h6>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    // 内置大小
    level: {
      type: [Number, String],
      default: 1
    },
    // 是否加粗
    bold: {
      type: Boolean,
      default: true
    },
    // 自定义大小
    size: {
      type: [Number, String],
      default: null
    },
    // 自定义颜色
    color: {
      type: String,
      default: null
    },
    // 显示类型
    card: {
      type: [String, Boolean],
      default: null
    }
  },
  data () {
    return {

    }
  },
  computed: {
    style () {
      const { size, color } = this
      return { 'font-size': `${size}px`, color }
    },
    classNameTitle () {
      const { bold, level } = this
      return `${bold ? 'vui-title-b' : ''} vui-title-${level}`
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.vui-typography {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5em;
    color: @title-color;
    font-weight: 400;
  }
  .vui-title {
    flex: 1;
    &-b {
      font-weight: 600;
    }
    &-1 {
      font-size: 38px;
      line-height: 1.23;
    }
    &-2 {
      font-size: 30px;
      line-height: 1.35;
    }
    &-3 {
      font-size: 24px;
      line-height: 1.35;
    }
    &-4 {
      font-size: 20px;
      line-height: 1.4;
    }
    &-5 {
      font-size: 18px;
      line-height: 1.4;
    }
    &-6 {
      font-size: 16px;
      line-height: 1.4;
    }

    &-card {
      position: relative;
      background: #fff;
      display: flex;
      align-items: center;
      padding: 8px;
    }

    &-line,
    &-dot {
      padding-left: 25px;
      &::after {
        content: "";
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);

        background: @primary-color;
      }
    }
    &-dot {
      &::after {
        width: 6px;
        height: 6px;
        border-radius: 100%;
      }
    }
    &-line {
      &::after {
        height: 40%;
        width: 4px;
      }
    }
  }
}
</style>
