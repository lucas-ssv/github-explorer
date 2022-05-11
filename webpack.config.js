const path = require('path')
const { EnvironmentPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new EnvironmentPlugin({
      API_URL: 'https://api.github.com'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html'
    })
  ]
}
