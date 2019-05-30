const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  css: {
    // 为预处理器的 loader 传递自定义选项。比如传递给 sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      less: {
        // 启用内联JavaScript
        javascriptEnabled: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/531431988.github.io/vue-component-library/dist',
  productionSourceMap: false
}
