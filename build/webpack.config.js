const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcDir = path.join(__dirname, '../src');
const devMode = process.env.NODE_ENV !== 'production';

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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          },
          'postcss-loader',
          'less-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${srcDir}/index.html` }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, srcDir)
    }
  }
}