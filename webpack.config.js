const StripLoader = require('strip-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./public/js/formatData.js', './public/js/bootstrap.min.js', './src/estimator.js'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: 'public/js/',
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'data'
  },
  watch: true,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: StripLoader.loader('console.log')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({

      inject: true,

      template: path.resolve('./index.html')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js&/,
        cache: true,
        parallel: true
      })
    ]
  },
  resolve: { extensions: ['.js'] }
};
