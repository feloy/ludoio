'use strict';

var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry:  { 
      'test-create-players': './src/test-create-players.ts'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'this'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: [nodeExternals()] 
};
