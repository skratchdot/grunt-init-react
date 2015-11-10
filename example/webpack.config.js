const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageInfo = require('./package.json');
module.exports = {
    context: `${__dirname}/app`,
    entry: [
      './App.js',
      './index.html',
      './styles/app.less'
    ],
    output: {
        filename: 'app.js',
        path: `${__dirname}/build/dev/${packageInfo.name}/js`
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('../css/app.css')
    ],
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loaders: ['transform/cacheable?brfs', 'react-hot', 'babel-loader']
            },
            {
              test: /\.html$/,
              loader: 'file?name=../[name].[ext]'
            },
            {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
              test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$/,
              loader: 'file?name=../fonts/[name].[ext]'
            },
            {
              test: /\.json$/,
              loader: 'json?name=[name].[ext]'
            }
        ]
    }
};
