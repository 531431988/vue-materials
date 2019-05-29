<template>
  <Layout>
    <Header>
      <Row>
        <Col span="12">
          <h2>一个基于IVIEW UI框架的组件库</h2>
        </Col>
        <Col span="12" class="tr">
          <a href="https://github.com/531431988/vue-component-library" target="_blank">
            <Icon type="logo-github" size="30"/>
          </a>
        </Col>
      </Row>
    </Header>
    <Content>
      <slot></slot>
    </Content>
    <Footer>
      <div class="tc">
        531431988
        © 2018-现在 版权所有
      </div>
    </Footer>
  </Layout>
</template>

<style lang="scss">
.ivu-layout-header {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>
