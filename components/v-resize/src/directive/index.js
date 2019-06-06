import Vue from 'vue'
import resize from './resize'

const importDirective = () => {
  Vue.directive(resize.name, resize)
}

importDirective()
