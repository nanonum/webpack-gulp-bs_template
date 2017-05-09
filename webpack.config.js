const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const bourbon = require('bourbon');
const bourbonNeat = require('bourbon-neat');

module.exports = {
  entry: {
    app: './src/js/main.js',
    vendor: ['jquery', 'lodash', 'moment'],
    style: './src/scss/style.scss',
    index: './src/pug/index.pug'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', {
            loader: 'sass-loader',
            options: {
              includePaths: bourbon.includePaths
            }
          }]
        })
      },
      {
        test: /\.pug$/,
        use: ExtractTextPlugin.extract({
          fallback: 'html-loader',
          use: ['html-loader', 'pug-html-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new ExtractTextPlugin('[name].html'),
    // new webpack.optimize.UglifyJsPlugin({ minimize:true }),
    // new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app']
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),

    // new webpack.ProvidePlugin({
    //     Vue: 'Vue'
    // })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    port: 4000,
    inline: true
  }
};
