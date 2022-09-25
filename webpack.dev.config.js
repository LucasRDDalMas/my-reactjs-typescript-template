const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[fullhash]-[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: {
      directory: './dist'
    },
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/_dev.html',
      favicon: "./public/favicon.ico"
    })
  ]
})
