'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var BASE_DIR = process.cwd();
var EXAMPLES_DIR = path.resolve(process.cwd(), 'examples');
var SRC_DIR = require(path.resolve(BASE_DIR, 'package.json')).main;

var config = Object.create(baseConfig);
config.entry = {
  bundle: SRC_DIR,
  app: path.resolve(EXAMPLES_DIR, 'app.js'),
}
config.output = {
  filename: '[name].js',
  path: EXAMPLES_DIR,
};
config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

module.exports = config;