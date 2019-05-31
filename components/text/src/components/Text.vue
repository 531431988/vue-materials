<template>
  <span :class="className" :style="style" v-if="inline">
    <mark v-if="mark" :style="{
        background: typeof mark === 'string' ? mark : false}">
      <slot></slot>
    </mark>
    <code v-else-if="code" :style="{
        background: typeof code === 'string' ? code : false}">
      <slot></slot>
    </code>
    <u v-else-if="underline">
      <slot></slot>
    </u>
    <del v-else-if="del">
      <slot></slot>
    </del>
    <slot v-else></slot>
  </span>
  <p :class="className" :style="style" v-else>
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    // 行内文本
    inline: {
      type: Boolean,
      default: true
    },
    // 是否加粗
    bold: {
      type: Boolean,
      default: false
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
    type: {
      type: String,
      default: null
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 显示遮罩效果
    mark: {
      type: [Boolean, String],
      default: null
    },
    code: {
      type: [Boolean, String],
      default: null
    },
    underline: {
      type: Boolean,
      default: null
    },
    del: {
      type: Boolean,
      default: null
    },
    ell: {
      type: [Number, String],
      default: 1
    }
  },
  data () {
    return {

    }
  },
  computed: {
    style () {
      const { size, color, inline, ell } = this
      let nowrap = !inline && ell !== 1 ? {
        'white-space': 'nowrap',
        display: 'block'
      } : {}
      let row = ell > 1 ? {
        'white-space': 'normal',
        display: '-webkit-box',
        '-webkit-line-clamp': ell,
        '-webkit-box-orient': 'vertical'
      } : {}
      return {
        'font-size': `${size}px`,
        color,
        ...nowrap,
        ...row

      }
    },
    className () {
      const { bold, type, disabled, mark, code, ell } = this
      return {
        'vui-typography-text': true,
        'vui-typography-text-b': bold,
        'vui-typography-text-primary': type === 'primary',
        'vui-typography-text-info': type === 'info',
        'vui-typography-text-success': type === 'success',
        'vui-typography-text-error': type === 'error',
        'vui-typography-text-warning': type === 'warning',
        'vui-typography-text-disabled': disabled,
        'vui-typography-text-mark': mark,
        'vui-typography-text-code': code,
        'vui-typography-text-ell': ell
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.vui-typography-text {
  color: @text-color;
  &-b {
    font-weight: 600;
  }
  &-primary {
    color: @primary-color;
  }
  &-info {
    color: @info-color;
  }
  &-success {
    color: @success-color;
  }
  &-warning {
    color: @warning-color;
  }
  &-error {
    color: @error-color;
  }
  &-disabled {
    color: @btn-disable-color;
    cursor: not-allowed;
  }
  &-mark {
    mark {
      padding: 0.2em;
      background-color: @warning-color;
    }
  }
  &-code {
    code {
      padding: 0.2em;
      font-size: 85%;
      background: @background-color-base;
      border: 1px solid @border-color-base;
      border-radius: 3px;
    }
  }
  &-ell {
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
