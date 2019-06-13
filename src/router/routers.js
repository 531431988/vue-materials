const $import = name => import(`@/views/${name}.vue`)
export default [
  {
    path: '/',
    component: () => import('@/components/Main.vue'),
    children: [
      {
        path: '',
        component: () => $import('index')
      }
    ]
  }
]
