const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader' }],
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        SubApp1: 'SubApp1@http://localhost:3001/remoteEntry.js',
        SubApp2: 'SubApp2@http://localhost:3002/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};