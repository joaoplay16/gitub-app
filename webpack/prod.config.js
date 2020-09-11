
const webpack = require('webpack')
const common = require('./common')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: common.entry,
  output: common.output,

    /* optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      }, */

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css',
      chunkFilename: '[id]-[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new HtmlPlugin(common.htmlPluginConfig('template-dev.html')),
  ],

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      Object.assign({}, common.cssLoader, {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      })
    ]
  },

  resolve: common.resolve
}
