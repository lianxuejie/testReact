const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    proxy: { // 代理
      "/testapi": {
        target:
        "https://www.easy-mock.com/mock/5dff0acd5b188e66c6e07329/react-template",
         changeOrigin: true,
         secure: false,
         pathRewrite: { "^/testapi": "" }
      }
    },
    historyApiFallback: true
  }
})