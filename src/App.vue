<template>
  <div id="app">
    <Main>
      <router-view/>
    </Main>
  </div>
</template>
<script>
import Main from '_c/Main'
export default {
  components: {
    Main
  }
}
</script>
