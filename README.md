# vue-component-library

基于 IVIEW 组件 vuecli3 脚手架的 VUE 仓库（模板/区块/组件） [在线预览](https://531431988.github.io/vue-component-library/dist/index.html)
仅适用于菜鸡项目快速开发使用，对设计要求不高的项目可减少大量重复代码

---

### 使用说明

- :point_right: 安装：npm i 或 cnpm i 或 yarn add
- :point_right: 运行：npm start 或 yarn start
- :point_right: 打包：npm run build 或 yarn build

### 文件结构

```shell
├── components         组件库
├── public             打包所需静态资源
├── template           组件开发模版文件
└── src
    ├── api            AJAX请求
    └── assets         项目静态资源
        ├── icons      自定义图标资源
        └── images     图片资源
    ├── components     业务组件
    ├── mock           mock模拟数据
    ├── router         路由配置
    ├── views          页面文件
└── .env               在所有的环境中被载入
└── .env.development   只development模式中被载入
└── .env.production    只production模式中被载入
```
