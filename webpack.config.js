const path = require('path')
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = {
  entry: './src/server.ts',
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new NodemonPlugin()
  ]
}