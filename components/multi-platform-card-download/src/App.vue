<template>
  <div id="app">
    <div class="card-download">
      <Row :gutter="24">
        <Col :span="8">
          <Card :bordered="false" :padding="30" class="windows">
            <div class="icon">
              <Icon type="logo-windows" size="96"/>
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <Button size="large" type="primary">下载</Button>
            <p class="log">
              <a>更新日志</a>
            </p>
          </Card>
        </Col>
        <Col :span="8">
          <Card :bordered="false" :padding="30" class="apple">
            <div class="icon">
              <Icon type="logo-apple" size="112"/>
              <img
                class="qrcode"
                src="http://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/iphone-hover2x.png"
              >
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <Button size="large" type="primary">下载</Button>
            <p class="tip">请用手机扫码下载</p>
            <p class="log">
              <a>更新日志</a>
            </p>
          </Card>
        </Col>
        <Col :span="8">
          <Card :bordered="false" :padding="30" class="android">
            <div class="icon">
              <Icon type="logo-android" size="112"/>
              <img
                class="qrcode"
                src="http://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/iphone-hover2x.png"
              >
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <Button size="large" type="primary">下载</Button>
            <p class="tip">请用手机扫码下载</p>
            <p class="log">
              <a>更新日志</a>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
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

<style lang="less">
#app {
  height: 100vh;
  padding-top: 5%;
  background: #f8f8f8;
}

.card-download {
  width: 60%;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  padding: 30px 0;
  .ivu-card {
    &:hover {
      box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);
    }
  }
  .windows {
    &:hover {
      background: url(//qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/01.png)
        no-repeat center 0;
      background-size: cover;
      .icon .ivu-icon {
        transform: translateY(20px);
        color: @primary-color;
      }
    }
  }
  .apple {
    &:hover {
      background: url(//qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/02.png)
        no-repeat center 0;
      background-size: cover;
    }
  }
  .android {
    &:hover {
      background: url(//qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/03.png)
        no-repeat center 0;
      background-size: cover;
    }
  }

  .apple,
  .android {
    .ivu-icon {
      margin-bottom: -16px;
    }
    .tip {
      font-size: 18px;
      margin: 28px 0 25px;
      display: none;
    }
    &:hover {
      .icon .ivu-icon {
        display: none;
      }
      .qrcode {
        opacity: 1;
        transform: translateY(16px);
        height: 96px;
      }
      .ivu-btn {
        display: none;
      }
      .tip {
        display: block;
      }
    }
  }
  .icon {
    margin-bottom: 50px;
    .ivu-icon {
      transition: all 0.3s;
    }
    .qrcode {
      position: relative;
      transition: transform 0.3s;
      height: 0;
      opacity: 0;
      margin: 0 auto;
    }
  }
  .name {
    font-size: 28px;
    margin-bottom: 0;
  }
  .version {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .ivu-btn {
    width: 120px;
    margin: 10px auto;
  }
  .log {
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>
