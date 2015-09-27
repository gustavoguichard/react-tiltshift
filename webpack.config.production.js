'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.release');

var config = Object.create(baseConfig);
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
)

module.exports = config;
