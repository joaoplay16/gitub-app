'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index'),

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js'
  },

  htmlPluginConfig: (template) => ({
    title: 'GitHub app',
    template: path.join(__dirname, '..', 'src', 'html', template)
  }),

  standardPreLoader: {
    test: /\.m?js$/,
    exclude: /node_modules/,
    include: /src/,
    use: ['standard-loader']
  },

  jsLoader: {
    test: /\.m?js$/,
    exclude: /node_modules/,
    include: /src/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    use: ['style-loader', 'css-loader']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }
}
