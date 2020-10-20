const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externalsType: 'script',
  externals: {
    jquery: ['https://code.jquery.com/jquery-3.5.1.min.js', '$'],
  }
};