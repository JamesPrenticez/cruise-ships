const path = require('path')
let webpack = require('webpack'); 

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true', './client/index.js'],
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}