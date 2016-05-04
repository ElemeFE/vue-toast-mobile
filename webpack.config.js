const ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  filename: 'index.js',
  path: './lib'
};
options.plugins = [new ExtractTextPlugin('vue-toast-mobile.css')];
options.vue.loaders.css = ExtractTextPlugin.extract('style', 'css');
module.exports = options;
