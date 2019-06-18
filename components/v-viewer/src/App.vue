<template>
  <viewer :options="options" :images="images" @inited="inited" class="viewer" ref="viewer">
    <template v-slot="props">
      <Row>
        <Col :md="8" :lg="4" v-for="(src,index) in props.images" :key="index">
          <img :src="src.thumbnail" :data-source="src.source" :alt="src.title">
        </Col>
      </Row>
    </template>
  </viewer>
</template>
<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer/src/component.vue'
export default {
  components: {
    Viewer
  },
  data () {
    const sourceImages = []
    const base = parseInt((Math.random() * 60), 10) + 10
    for (let i = 0; i < 10; i++) {
      sourceImages.push({
        thumbnail: 'https://picsum.photos/346/216/?image=' + (base + i),
        source: 'https://picsum.photos/1440/900/?image=' + (base + i),
        title: '图片标题'
      })
    }
    return {
      options: {
        toolbar: true,
        url: 'data-source'
      },
      images: sourceImages
    }
  },
  methods: {
    inited (viewer) {
      this.$viewer = viewer
    }
  }
}
</script>
<style lang="scss" scoped>
img {
  width: 100%;
  padding: 8px;
}
</style>

