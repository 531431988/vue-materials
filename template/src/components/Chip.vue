<template>
  <div class="vui-chip" :class="className">
    <slot name="avatar"></slot>
    <slot></slot>
    <span class="vui-chip-delete" v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    delete: {
      type: Number,
      required: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    className () {
      return {
        'vui-chip-default': true,
        'vui-chip-primary': this.type === 'primary',
        'vui-chip-info': this.type === 'info',
        'vui-chip-success': this.type === 'success',
        'vui-chip-warning': this.type === 'warning',
        'vui-chip-error': this.type === 'error'
      }
    }
  },
  methods: {
    handleDelete (e) {
      e.stopPropagation()
      this.$emit('delete')
    }
  }
}
</script>
<style lang="less" scoped>
.vui-chip {
  border-radius: 16px;
  white-space: nowrap;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  background-color: darken(@background-color-base, 5%);
  color: rgba(0, 0, 0, 0.87);
  padding: 0 12px;
  outline: none;
  cursor: default;
  .vui-chip-delete {
    display: inline-block;
    vertical-align: middle;
    margin-right: -8px;
    margin-left: 4px;
    transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }
  &-default {
    line-height: 32px;
    &:hover {
      background-color: darken(@background-color-base, 8%);
    }
  }
  .ant-avatar {
    margin-left: -13px;
    margin-right: 4px;
  }
  &-primary,
  &-info,
  &-success,
  &-warning,
  &-error {
    color: #fff;
  }
  &-primary {
    background: @primary-color;
    &:hover {
      background: lighten(@primary-color, 10%);
    }
  }
  &-info {
    background: @info-color;
    &:hover {
      background: lighten(@info-color, 10%);
    }
  }
  &-success {
    background: @success-color;
    &:hover {
      background: lighten(@success-color, 10%);
    }
  }
  &-warning {
    background: @warning-color;
    &:hover {
      background: lighten(@warning-color, 10%);
    }
  }
  &-error {
    background: @error-color;
    &:hover {
      background: lighten(@error-color, 10%);
    }
  }
}
</style>
