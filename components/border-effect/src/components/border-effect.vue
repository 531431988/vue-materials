<template>
  <div class="vui-border-effect">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <line class="top" x1="100%" y1="0" x2="200%" y2="0"></line>
      <line class="right" x1="100%" y1="100%" x2="100%" y2="200%"></line>
      <line class="bottom" x1="0" y1="100%" x2="-100%" y2="100%"></line>
      <line class="left" x1="0" y1="0" x2="0" y2="-100%"></line>
    </svg>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

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
.vui-border-effect {
  position: relative;
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
      // stroke: #1890ff;
      fill: none;
      transition: all 0.8s ease-in-out;
      stroke-dasharray: 9999;
    }
  }
  &:hover {
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
}
</style>
