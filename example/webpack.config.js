const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packageInfo = require('./package.json');
const devServerEntries = [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server'
];
const webpackConfig = {
  context: `${__dirname}/src/app`,
  entry: {
    'js/app.js': ['react-hot-loader/patch', ...devServerEntries, './index.js']
  },
  output: {
    filename: '[name]',
    path: `${__dirname}/build/dev/${packageInfo.name}`,
    publicPath: `http://localhost:8080/${packageInfo.name}/`
  },
  devServer: {
    hot: true,
    historyApiFallback: {
      index: `/${packageInfo.name}/index.html`
    },
    stats: {
      colors: true
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
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
        loaders: ['babel']
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
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
