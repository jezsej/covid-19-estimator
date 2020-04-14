const StripLoader = require('strip-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'public/js/', 'formatData.js'),
    path.join(__dirname, 'public/js/', 'bootstrap.min.js'),
    path.join(__dirname, 'src/estimator.js')],
  output: {
    path: path.resolve('build/js/'),
    publicPath: 'public/js/',
    filename: 'bundle.js'
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

      template: path.resolve('./prod/index.html')
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
