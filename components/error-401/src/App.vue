<template>
  <div id="app">
    <Error code="401" desc="Oh~~您没有浏览这个页面的权限~" :src="src"/>
  </div>
</template>

<script>
import Error from '_c/Error.vue'
import error401 from '@/assets/error-401.svg'
export default {
  components: {
    Error
  },
  data () {
    return {
      src: error401
    }
  }
}
</script>

<style>
</style>
