const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin(
    'styles.css'
  )
  const HTMLWebpack = new HtmlWebpackPlugin({
    template: path.join('src/index.html'),
    filename: 'index.html'
  })

  return {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: 'file-loader?name=/img/[name].[ext]'
        }
      ]
    },
    plugins: [
      CSSExtract,
      HTMLWebpack
    ],
    devtool: isProduction ? false : 'inline-source-map'
  }
}
