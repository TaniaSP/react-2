const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE': JSON.stringify('https://devurl.com/')
    })
  ]
})
