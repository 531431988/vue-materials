<template>
  <div class="error-page">
    <div class="error-page-content">
      <img :src="src" :alt="code">
      <div class="error-page-text">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <Button size="large" type="primary" @click="backHome" style="margin-right:10px">返回首页</Button>
      <Button size="large" type="primary" ghost @click="backPrev">返回上一页 ({{ second }} s)</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: String,
    desc: String,
    src: String
  },
  data () {
    return {
      second: 5,
      timer: null
    }
  },
  methods: {
    backHome () {
      this.$router.replace({
        name: this.$config.homeName
      })
    },
    backPrev () {
      // this.$router.go(-1)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" scoped>
.error-page {
  width: 100%;
  height: 100%;
  position: relative;
  .error-page-content {
    position: relative;
    width: 40%;
    margin: 5% auto;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .error-page-text {
      position: absolute;
      left: 0px;
      top: 0px;
      h4 {
        position: absolute;
        left: 0px;
        top: 0px;
        font-size: 80px;
        font-weight: 700;
        color: #348eed;
      }
      h5 {
        position: absolute;
        width: 700px;
        left: 0px;
        top: 100px;
        font-size: 20px;
        font-weight: 700;
        color: #67647d;
      }
    }
    .back-btn-group {
      position: absolute;
      right: 0px;
      bottom: 20px;
    }
  }
}
</style>
