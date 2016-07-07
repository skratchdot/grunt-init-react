const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageInfo = require('./package.json');
const webpackConfig = {
  context: `${__dirname}/src/app`,
  entry: {
    'js/app.js': ['./index.js'],
    'css/app.css': ['./styles/app.less']
  },
  output: {
    filename: '[name]',
    path: `${__dirname}/build/dev/${packageInfo.name}`
  },
  devServer: {
    hot: true,
    publicPath: `/${packageInfo.name}/`,
    historyApiFallback: {
      index: `/${packageInfo.name}/index.html`
    },
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/app.css'),
    new CopyWebpackPlugin([
      { from: './index.html', to: './index.html' },
      { from: './index.html', to: './404.html' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
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
        loader: ExtractTextPlugin.extract('style-loader',
          'css-loader!less-loader')
      },
      {
        test: /.*\/images\/.*/,
        loader: 'url?name=./images/[name].[ext]'
      },
      {
        test: /\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$/,
        loader: 'url?name=./fonts/[name].[ext]'
      },
      {
        test: /\.md$/,
        loader: 'html!markdown'
      },
      {
        test: /\.json$/,
        loader: 'json?name=[name].[ext]'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
  webpackConfig.output.path = `${__dirname}/build/prod`;
}

module.exports = webpackConfig;
