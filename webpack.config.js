const webpack = require('webpack')
const path = require('path')

module.exports = (env) => {
  const isProduction = env === 'production'

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
          test: /\.json$/,
          exclude: /(node_modules)/,
          use: 'json-loader'
        },
        {
          test: /\.s?css$/,
          use: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')],
      historyApiFallback: true
    }
  }
}
