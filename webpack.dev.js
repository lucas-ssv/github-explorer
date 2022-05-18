const path = require('path')
const { EnvironmentPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true
        }
      }, 'sass-loader']
    }]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    historyApiFallback: true,
    port: 8080
  },
  plugins: [
    new EnvironmentPlugin({
      API_URL: 'https://api.github.com'
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    })
  ]
})
