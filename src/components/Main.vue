<template>
  <Layout>
    <Header>
      <Row>
        <Col span="20">
          <Row type="flex" align="middle">
            <img src="../assets/logo.svg" width="40">
            <h3>一个基于IVIEW UI框架的海量组件库</h3>
          </Row>
        </Col>
      </Row>
    </Header>
    <Content style="padding-top: 64px">
      <router-view></router-view>
    </Content>
    <Footer>
      <div class="tc">
        <a href="https://github.com/531431988/vue-component-library" target="_blank">
          <Icon type="logo-github" size="20"/>
        </a>
        531431988
        © 2018-至今 版权所有
      </div>
    </Footer>
  </Layout>
</template>

<style lang="scss" scoped>
.ivu-layout-header {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  z-index: 99;
  background: #fff;
}
</style>
