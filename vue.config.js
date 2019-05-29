const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const resolve = dir => path.join(__dirname, dir)
// 判断环境
const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    // 去掉 console.log
    if (IS_PROD) {
      const plugins = []
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
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
  publicPath: './',
  productionSourceMap: false
}
