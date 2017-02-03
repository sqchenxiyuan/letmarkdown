var path = require('path');
var webpack = require('webpack');

// 模块导入
module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',//入口
    output: {
        path: '/dist/',
        publicPath:'/js/',
        filename: 'index.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /node_modules/
          }
        ]
    },
    devServer: {
      contentBase: "examples/",
      historyApiFallback: true,
      noInfo: true
    },
  //  performance: {
  //   maxInitialChunkSize: 1000*1000,
  //   maxAssetSize: 1000*1000
  //  }
};
