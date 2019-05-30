<template>
  <div :class="`vue-skeleton ${active ? 'vue-skeleton-active' : ''}`">
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-else>
      <Avatar class="vue-skeleton-avatar" size="large" v-if="avatar"/>
      <div class="vue-skeleton-content">
        <h3 class="vue-skeleton-title" style="width: 38%;"></h3>
        <ul class="vue-skeleton-paragraph">
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
.vue-skeleton {
  display: table;
  width: 100%;

  // Avatar
  .vue-skeleton-avatar {
    margin-right: 16px;
    display: inline-block;
    vertical-align: top;
    background: #f2f2f2;
  }

  &-content {
    display: table-cell;
    vertical-align: top;
    width: 100%;
    .vue-skeleton-title {
      margin-top: 16px;
      height: 16px;
      width: 100%;
      background: #f2f2f2;

      + .vue-skeleton-paragraph {
        margin-top: 24px;
      }
    }

    .vue-skeleton-paragraph {
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

  &.vue-skeleton-active {
    .vue-skeleton-title,
    .vue-skeleton-paragraph > li,
    .vue-skeleton-avatar {
      background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
      animation: vue-skeleton-loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
  }
}

@keyframes vue-skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
