import resize from './resize'

const importDirective = Vue => {
  Vue.directive(resize.name, resize)
}

export default importDirective
