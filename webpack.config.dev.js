var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: require.resolve('jquery'), loader: 'expose?$!expose?jQuery' },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.js$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'src') },
      { test: /\.json?$/,        exclude: /node_modules/,       loader: 'json'},
      { test: /\.jade?$/,        exclude: /node_modules/,       loader: 'jade'},
      { test: /\.woff2?/,                                       loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,           loader: 'file-loader' },
      { test: /\.less$/,                                        loader: "style!css!less"},
      { test: /\.scss$/,                                        loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/,                                         loaders: ['style','css']},
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  },
  resolve:{ modulesDirectories:["node_modules"] },
  postcss: [require('autoprefixer')]
};
