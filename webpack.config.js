var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app/driver.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/static/js',
    publicPath: "/static/js",
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: false 
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ]
};
