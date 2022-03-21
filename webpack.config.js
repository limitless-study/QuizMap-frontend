const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HTMLWeebPackPlugin = require('html-webpack-plugin');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.resolve(__dirname, '.env.development') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '.env.production') });
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      historyApiFallback: true,
      contentBase: './',
      hot: true,
    },
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: './index.html',
      publicPath: '/',
    }),

    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};
