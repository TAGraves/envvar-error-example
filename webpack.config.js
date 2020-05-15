const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: ['./index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '..'),
        ],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env))
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
