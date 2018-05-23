const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

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
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        },
        {
          loader: 'less-loader',
          options: { sourceMap: true }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/frontend/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css'
    })
  ],
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
    new CopyWebpackPlugin([{ from: 'src/frontend/assets' }])
  ])
}

module.exports = config
