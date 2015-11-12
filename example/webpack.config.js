const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageInfo = require('./package.json');
module.exports = {
    context: `${__dirname}/app`,
    entry: {
      'js/app.js': ['./App.js'],
      'css/app.css': ['./styles/app.less']
    },
    output: {
        filename: '[name]',
        path: `${__dirname}/build/dev/${packageInfo.name}`
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('css/app.css'),
      new CopyWebpackPlugin([
        { from: './index.html', to: './index.html' },
        { from: './index.html', to: './404.html' }
      ])
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['transform/cacheable?brfs', 'react-hot', 'babel-loader']
            },
            {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
              test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$/,
              loader: 'file?name=./fonts/[name].[ext]'
            },
            {
              test: /\.json$/,
              loader: 'json?name=[name].[ext]'
            }
        ]
    }
};
