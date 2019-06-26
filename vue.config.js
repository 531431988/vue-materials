const path = require('path')
const glob = require('glob-all')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const resolve = dir => path.resolve(__dirname, dir)
const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  // 配置基础
  publicPath: process.env.VUE_APP_PUBLIC_PATH, // 默认'/'，部署应用包时的基本 URL
  outputDir: 'dist', // '默认dist', 生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  runtimeCompiler: false, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  // 配置 proxy 跨域
  devServer: {
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // open: IS_PROD,
    // host: '0.0.0.0',
    // port: 8000,
    // https: false,
    // hotOnly: false,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API || 'http://127.0.0.1:8080',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    // ie报错无效字符 添加该配置项 解决该问题
    config.module
      .rule('iview')
      .test(/iview.src.*?js$/)
      .use('babel')
      .loader('babel-loader')
    // 配置IVIEW前缀
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('view-loader')
      .loader('iview-loader')
      .options({
        prefix: false
      })
    // 修复 HMR(热更新)失效
    config.resolve.symlinks(true)
    // 修复 Lazy loading routes Error
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: '65-90', speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      })
    // 添加别名
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
    // 打包分析
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
    return config
  },

  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      // 去除多余无效的 css
      plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([resolve('./**/*.vue')]),
          extractors: [
            {
              extractor: class Extractor {
                static extract (content) {
                  const validSection = content.replace(/<style([\s\S]*?)<\/style>+/gim, '')
                  return validSection.match(/[A-Za-z0-9-_:/]+/g) || []
                }
              },
              extensions: ['html', 'vue']
            }
          ],
          whitelist: ['html', 'body'],
          whitelistPatterns: [/el-.*/],
          whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
        })
      )
      // 开启 gzip 压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
      // cdn引用时配置externals
      // config.externals = {
      //   vue: 'Vue'
      // }
    }
  },
  css: {
    // 为预处理器的 loader 传递自定义选项。比如传递给 sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {
      less: {
        // modifyVars: {
        //   'primary-color': '#2d8cf0'
        // },
        // 启用内联JavaScript
        javascriptEnabled: true
      }
      // 配置SCSS全局变量
      // sass: {
      //   data: '@import "@/theme.scss";'
      // }
    }
  },
  // LESS scss全局变量
  pluginOptions: {
    // 'less scss'
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/theme.less')]
    }
  }
}
