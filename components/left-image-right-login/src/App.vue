<template>
  <div id="app">
    <Row type="flex">
      <Col span="16">
        <div class="vue-login-left">
          <div
            style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 3;"
          >
            <div class="title">优质服务，追求卓越</div>
            <p>Amazing Stuff is Lorem Here.ICE Team</p>
          </div>
          <div class="mask"></div>
        </div>
      </Col>
      <Col span="8">
        <div class="vue-login-right">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" style="width: 50%;">
            <h4 class="title">用户登录</h4>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入用户名" size="large">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码" size="large">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem style="text-align:center">
              <Button
                type="primary"
                shape="circle"
                long
                @click="handleSubmit('formInline')"
                size="large"
                class="vue-login-button"
              >登录</Button>
              <div>
                <a href="#" style="margin-right:15px">立即注册</a>
                <a href="#">找回密码</a>
              </div>
            </FormItem>
          </Form>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码最少为6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('验证成功')
        } else {
          this.$Message.error('验证失败')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  position: relative;
  height: 100vh;
}
.vue-login {
  &-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    height: 100vh;
    background-image: url(https://unpkg.com/@icedesign/login-panel-block@2.0.1/build/images/a508d48b5bc825e89a42da6c41afa22a.jpg);
    background-size: cover;
    color: #fff;
    .title {
      margin-top: 60px;
      font-weight: 500;
      font-size: 38px;
      line-height: 1.5;
      text-align: center;
    }
    .mask {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
    }
  }
  &-right {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: rgb(255, 255, 255);
    .title {
      margin-bottom: 40px;
      font-weight: 500;
      font-size: 32px;
      text-align: center;
      letter-spacing: 4px;
    }
  }
  &-button {
    font-size: 18px;
    width: 50%;
    text-align: center;
    margin: 30px auto 10px;
    box-shadow: 0 0 8px rgba(45, 140, 240, 0.5);
  }
}
</style>
