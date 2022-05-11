const wp = require('@cypress/webpack-preprocessor')

module.exports = wp({
  webpackOptions: {
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true // https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalse
        }
      }]
    }
  }
})
