module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.html$/, loader: 'html' }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  externals: {
    vue: 'Vue'
  },
  babel: {
    presets: ['es2015']
  }
};
