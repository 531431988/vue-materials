<template>
  <div id="app">
    <div class="card-download">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-card :bordered="false" class="windows">
            <div class="icon">
              <a-icon theme="filled" type="windows"/>
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <a-button size="large" type="primary">下载</a-button>
            <p class="log">
              <a>更新日志</a>
            </p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" class="apple">
            <div class="icon">
              <a-icon theme="filled" type="apple"/>
              <img
                class="qrcode"
                src="http://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/iphone-hover2x.png"
              >
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <a-button size="large" type="primary">下载</a-button>
            <p class="tip">请用手机扫码下载</p>
            <p class="log">
              <a>更新日志</a>
            </p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :bordered="false" class="android">
            <div class="icon">
              <a-icon theme="filled" type="android"/>
              <img
                class="qrcode"
                src="http://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/iphone-hover2x.png"
              >
            </div>
            <h4 class="name">Windows版</h4>
            <p class="version">版本2.3.2 2019-06-12</p>
            <a-button size="large" type="primary">下载</a-button>
            <p class="tip">请用手机扫码下载</p>
            <p class="log">
              <a>更新日志</a>
            </p>
          </a-card>
        </a-col>
      </a-row>
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
  .ant-card {
    &:hover {
      box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.12);
    }
  }
  .windows {
    &:hover {
      background: url(//qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/01.png)
        no-repeat center 0;
      background-size: cover;

      .icon .anticon {
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
    .tip {
      font-size: 18px;
      margin: 36px 0 25px;
      display: none;
    }
    &:hover {
      .icon .anticon {
        display: none;
      }
      .qrcode {
        opacity: 1;
        transform: translateY(20px);
        height: 96px;
      }
      .ant-btn {
        display: none;
      }
      .tip {
        display: block;
      }
    }
  }
  .ant-card-body {
    padding: 50px 24px;
  }
  .icon {
    margin-bottom: 50px;
    .anticon {
      transition: all 0.3s;
      font-size: 96px;
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
  .ant-btn {
    width: 120px;
    margin: 10px auto;
  }
  .log {
    font-size: 16px;
    margin-top: 10px;
  }
}
</style>
