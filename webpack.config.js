const webpack = require('webpack')
const path = require('path')
const ejs = require('ejs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {
  const isProduction = env === 'production'
  
  const CSSExtract = new ExtractTextPlugin(
    'styles.css'
  )

  const HTMLWebpack = new HtmlWebpackPlugin({
    template: 'views/index.ejs',
    chunks: ['landing']
  })

  return {
    entry: ['babel-polyfill', './src/index.js', './views/index.ejs'],
    output: {
      path: path.join(__dirname, '/public'),
      filename: 'bundle.js'
    },
    plugins: [
      CSSExtract,
      HTMLWebpack
    ],
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
        },
        {
          test: /\.ejs$/,
          use: 'ejs-compiled-loader'
        }
        
      ]
    },
    devtool: isProduction ? false : 'inline-source-map'
  }
}
