<template>
  <div id="app">
    <div id="toolbar">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
      <button class="ql-header" value="1"></button>
      <button class="ql-header" value="2"></button>
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
      <button class="ql-indent" value="-1"></button>
      <button class="ql-indent" value="+1"></button>
      <button class="ql-direction" value="rtl"></button>
      <select class="ql-size">
        <option value="small">小号</option>
        <option selected>正常</option>
        <option value="large">大号</option>
        <option value="huge">超大号</option>
      </select>
      <select class="ql-header">
        <option value="1">标题1</option>
        <option value="2">标题2</option>
        <option value="3">标题3</option>
        <option value="4">标题4</option>
        <option value="5">标题5</option>
        <option value="6">标题6</option>
        <option selected>默认</option>
      </select>
      <select class="ql-font">
        <option selected value="Microsoft YaHei">微软雅黑</option>
        <option value="Arial">Arial</option>
        <option value="宋体">宋体</option>
      </select>
      <select class="ql-color"></select>
      <select class="ql-background"></select>
      <select class="ql-align"></select>
      <button class="ql-link"></button>
      <button class="ql-video"></button>
      <button id="custom-button">
        <Icon type="md-image" size="18"></Icon>
      </button>
    </div>
    <quill-editor
      v-model="content"
      ref="quillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <br>
    结果：{{content}}
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      content: '我是一个汉化后的富文本编辑器',
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      }
    }
  },
  methods: {
    onEditorBlur (quill) {
      console.log('编辑器失去焦点', quill)
    },
    onEditorFocus (quill) {
      this.$Message.info('编辑器获得焦点')
      console.log('编辑器获得焦点', quill)
    },
    onEditorReady (quill) {
      this.$Message.info('编辑器准备就绪')
      console.log('编辑器准备就绪', quill)
    },
    onEditorChange ({ quill, html, text }) {
      this.$Message.info('编辑器数据改变')
      console.log('编辑器数据改变', quill, html, text)
      this.content = html
    }
  },
  computed: {
    editor () {
      return this.$refs.quillEditor.quill
    }
  },
  mounted () {
    this.$Message.info('这是当前的Quill实例对象')
    console.log('这是当前的Quill实例对象', this.editor)
    var customButton = document.querySelector('#custom-button')
    customButton.addEventListener('click', () => {
      this.$Message.info('Clicked')
    })
  }
}
</script>
<style lang="scss" scoped>
#app {
  margin: 5% 30%;
  height: 300px;
}
.quill-editor {
  height: 100%;
  #custom-button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
  }
}
</style>
