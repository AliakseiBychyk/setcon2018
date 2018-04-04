const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const ejsIndex = require('ejs-loader!./views/index.ejs')
// const ejsHeader = require('ejs-loader!./views/header.ejs')
// const ejsFooter = require('ejs-loader!./views/footer.ejs')

// const ejsTemplate = require('ejs-compiled!./views/index.ejs')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin(
    'styles.css'
  )

  // const ejsTemplate = ejsIndex({include: ejsHeader}, {include: ejsFooter})
  const HTMLWebpack = new HtmlWebpackPlugin({
    template: require('ejs-compiled!./views/index.ejs'),
    inject: 'body'
  })

  return {
    entry: ['babel-polyfill', './src/index.js'],
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
        }
        
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map'
  }
}
