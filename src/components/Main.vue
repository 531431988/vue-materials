<template>
  <div>
    <a-layout>
      <a-layout-header>
        <a-row>
          <a-col :span="20">
            <a-row type="flex" align="middle">
              <img src="../assets/logo.svg" width="40">
              <h3 style="margin-bottom:0">VUE 组件库</h3>
            </a-row>
          </a-col>
          <a-col :span="4" class="tr">
            <a href="https://github.com/531431988/vue-component-library" target="_blank">
              <a-icon type="github" style="font-size: 30px"/>
            </a>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content style="padding-top: 64px">
        <slot></slot>
      </a-layout-content>
      <a-layout-footer>
        <div class="tc">
          531431988
          © 2018-至今 版权所有
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
.ant-layout-header {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 99;
  background: #fff;
}
</style>
