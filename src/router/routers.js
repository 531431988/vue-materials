const $import = name => import(`@/views/${name}.vue`)
export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => $import('index')
  },
  {
    path: '/about',
    component: () => $import('about')
  }
]
