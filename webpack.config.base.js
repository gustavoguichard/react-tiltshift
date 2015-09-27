'use strict';

var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
