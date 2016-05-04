var options = require('./webpack.base.js');
options.entry = './example';
options.output = {
  filename: 'build.js',
  path: './example/dist/'
};
module.exports = options;
