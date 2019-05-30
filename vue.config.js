const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    // 配置IVIEW前缀
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('view-loader')
      .loader('iview-loader')
      .options({
        prefix: false
      })
      .end()
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
      // 配置SCSS全局变量
      // sass: {
      //   data: '@import "@/theme.scss";'
      // }
    }
  },
  // LESS全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/theme.less')]
    }
  },

  publicPath: process.env.NODE_ENV === 'development' ? '/' : 'vue-component-library/dist',
  productionSourceMap: false
}
