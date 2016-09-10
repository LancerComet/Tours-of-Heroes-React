const path = require('path')
const config = require('../config')
const utils = require('./utils')

const projectSrcPaths = [
  path.resolve(__dirname, '../src')
]

const baseConfig = {
  entry: {
    app: projectSrcPaths[0]
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': projectSrcPaths[0],
      'assets': projectSrcPaths[0] + '/assets'
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectSrcPaths
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.jade$/,
        loader: 'jade'
      },
      {
        test: /\.css$/,
        loader: 'css'
      },
      {
        test: /\.styl$/,
        loader: 'css!stylus'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 2000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 2000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

module.exports = baseConfig
