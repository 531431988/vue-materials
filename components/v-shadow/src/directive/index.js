import shadow from './shadow'

const importDirective = Vue => {
  Vue.directive(shadow.name, shadow)
}

export default importDirective
