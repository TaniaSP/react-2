const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  })],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}
