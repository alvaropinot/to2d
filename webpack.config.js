const libraryName = require('./package.json').name;
const outputFile = libraryName + '.js';

const config = {
  entry: __dirname + '/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.js)$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }
    ]
  }
};

module.exports = config;
