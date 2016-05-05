var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  libraryTarget: 'umd',
  filename: 'index.js',
  path: './lib'
};
module.exports = options;
