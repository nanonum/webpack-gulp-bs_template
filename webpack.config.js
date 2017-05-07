var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: './src/js/main.js',
    vendor: ['jquery', 'lodash', 'moment']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
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
  // devServer: {
  //   contentBase: 'dist',
  //   port: 4000
  // }
};
