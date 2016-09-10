/*
 *  Dev base configuration for dev server By LancerComet at 17:08, 2016.06.13.
 *  # Carry Your World #
 *  ---
 *  开发服务器 base config.
 *  output.publicPath 使用本地路径, 其他配置引用 production 配置.
 */

var config = require('../config');
var utils = require('./utils');
var baseConfig = require("./webpack.base.conf");

module.exports = {
  entry: baseConfig.entry,
  output: {
    path: config.build.assetsRoot,
    publicPath: config.dev.assetsPublicPath,  // 引入本地路径, For Dev Server.
    filename: '[name].js'
  },
  postcss: baseConfig.postcss,
  resolve: baseConfig.resolve,
  resolveLoader: baseConfig.resolveLoader,
  module: baseConfig.module
};
