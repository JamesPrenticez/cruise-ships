const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  // Added devtool for source mapping like James has
  // Refer to this website https://webpack.js.org/configuration/devtool/ for info on this 
  devtool: "eval-cheap-source-map",
  entry: ['webpack-hot-middleware/client?reload=true', './client/index.js'],
  output: {
    path: path.join(__dirname, 'server/public'),
    // Need publicPath for assets like favicon and spinner for opening page
    // Refer to this website https://webpack.js.org/guides/public-path/ for info on this 
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],      
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}