const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  devServer: {
    open: true, // Set to false to prevent the dev server from opening up automatically
    static: './dist',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.glsl$/,
        loader: 'webpack-glsl-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      { 
        test: /\.xml$/, 
        loader: 'xml-loader' 
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      },
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html"
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};