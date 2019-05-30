<template>
  <div id="app">
    <Error code="404" desc="Oh~~您的页面好像飞走了~" :src="src"/>
  </div>
</template>

<script>
import Error from '_c/Error.vue'
import error404 from '@/assets/error-404.svg'
export default {
  components: {
    Error
  },
  data () {
    return {
      src: error404
    }
  }
}
</script>

<style>
</style>
