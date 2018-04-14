const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

const extractLess = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
})

const config = {
  entry: './src/frontend',
  output: {
    path: path.resolve(__dirname, 'build/webpack'),
    filename: 'app.[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.less$/,
      use: extractLess.extract({
        use: [{
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'less-loader',
          options: { sourceMap: true }
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/frontend/index.html'
    }),
    extractLess
  ],
  resolve: {
    alias: {
      '_contracts': path.resolve(__dirname, 'build/contracts')
    }
  },
  devServer: {
    stats: 'minimal',
    contentBase: 'src/frontend/assets',
    overlay: true,
    historyApiFallback: true
  },
  watchOptions: {
    ignored: /node_modules/
  }
}

if (isProduction) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyWebpackPlugin([{ from: 'src/frontend/assets' }])
  ])
}

module.exports = config
