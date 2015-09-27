'use strict';

var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var BASE_DIR = process.cwd();

function getPackageMain() {
  return require(path.resolve(BASE_DIR, 'package.json')).main;
}

var config = Object.create(baseConfig);
config.entry = getPackageMain();
config.output = {
  library: 'ReactTiltshift',
  libraryTarget: 'umd'
};

config.externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
}

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
]

module.exports = config;
