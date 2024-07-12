import {path} from 'webpack';


module.exports = {
  entry: './test/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
      { test: /\.(?:js|mjs|cjs)$/, use: 'babel-loader' },
      { test: /\.scss$/, use: 'sass-loader' },
    ],
  },
};