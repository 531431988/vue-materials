import clickOutside from './click-outside'

const importDirective = Vue => {
  Vue.directive(clickOutside.name, clickOutside)
}

export default importDirective
