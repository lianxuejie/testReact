const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = path.join(__dirname, '../src');
module.exports =  {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      },
      {
        test: /\.less$/,
        use: [
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${srcDir}/index.html` })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, srcDir)
    }
  }
}