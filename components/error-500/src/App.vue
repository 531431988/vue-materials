<template>
  <div id="app">
    <Error code="500" desc="Oh~~鬼知道服务器经历了什么~" :src="src"/>
  </div>
</template>

<script>
import Error from '_c/Error.vue'
import error500 from '@/assets/error-500.svg'
export default {
  components: {
    Error
  },
  data () {
    return {
      src: error500
    }
  }
}
</script>

<style>
</style>
