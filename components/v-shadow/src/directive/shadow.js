import './shadow.less'
import { hasClass, addClass, removeClass } from '../utils/dom'

function getElevationClass (depth) {
  return 'vui-shadow-' + depth
}
export default {
  name: 'shadow',
  inserted (el, { value }, vnode) {
    addClass(el, getElevationClass(value))
  },
  update (el, { value, oldValue }) {
    if (value === oldValue && hasClass(el, getElevationClass(oldValue))) return
    removeClass(el, getElevationClass(oldValue))
    addClass(el, getElevationClass(value))
  },
  unbind (el, { value }) {
    removeClass(el, getElevationClass(value))
  }
}
