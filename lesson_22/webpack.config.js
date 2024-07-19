import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  entry: ['./index.js', './style.scss'],
  output: { 
    filename: '[name].js',
    path: path.join(path.resolve(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    concatenateModules: true,
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin(),
  ],
}