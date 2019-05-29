<template>
  <Layout>
    <Header>
      <Row>
        <Col span="12">
          <div>logo</div>
        </Col>
        <Col span="12" class="tr">
          <Button type="text">按钮</Button>
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
