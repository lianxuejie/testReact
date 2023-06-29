const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path')
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': '"/dev-api"'
    })
  ],
  devServer: {
    port: 3000,
    hot: true,
    proxy: { // 代理
      [process.env.BASE_URL]: {
        target: "https://api.magir.ai/api",
        changeOrigin: true,
        secure: false,
        pathRewrite: { ['^' + process.env.BASE_URL]: "" }
      }
    },
    historyApiFallback: true
  }
})