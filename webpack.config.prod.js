var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');



module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
      { test: /\.less$/,                                        loader: ExtractTextPlugin.extract('css?sourceMap!' + 'less?sourceMap') },
      { test: /\.scss$/,                                        loaders: ['style', 'css', 'sass'] },
      { test: /\.css$/,                                         loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')}]
  },
  resolve:{ modulesDirectories:["node_modules"] },
  postcss: [require('autoprefixer')]

};
