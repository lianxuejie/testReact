const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    hot: true,
    // contentBase: path.resolve(__dirname, '../dist')
  }
})