<template>
  <div :class="`vui-skeleton ${active ? 'vui-skeleton-active' : ''}`">
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-else>
      <Avatar class="vui-skeleton-avatar" size="large" v-if="avatar"/>
      <div class="vui-skeleton-content">
        <h3 class="vui-skeleton-title" style="width: 38%;"></h3>
        <ul class="vui-skeleton-paragraph">
          <li></li>
          <li></li>
          <li style="width: 61%;"></li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
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

<style lang="less">
.vui-skeleton {
  display: table;
  width: 100%;

  // Avatar
  .vui-skeleton-avatar {
    margin-right: 16px;
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
  }

  &-content {
    display: table-cell;
    vertical-align: top;
    width: 100%;
    .vui-skeleton-title {
      margin-top: 16px;
      height: 16px;
      width: 100%;
      background: #f2f2f2;

      + .vui-skeleton-paragraph {
        margin-top: 24px;
      }
    }

    .vui-skeleton-paragraph {
      > li {
        height: 16px;
        background: #f2f2f2;
        list-style: none;
        width: 100%;

        &:last-child:not(:first-child):not(:nth-child(2)) {
          width: 61%;
        }

        + li {
          margin-top: 16px;
        }
      }
    }
  }

  &.vui-skeleton-active {
    .vui-skeleton-title,
    .vui-skeleton-paragraph > li,
    .vui-skeleton-avatar {
      background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
      animation: vui-skeleton-loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
  }
}

@keyframes vui-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
