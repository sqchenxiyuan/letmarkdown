var path = require('path');
var webpack = require('webpack');

// 模块导入
module.exports = {
    devtool: 'eavl-source-map',
    entry: path.resolve(__dirname,'../src/index.js'),//入口
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
      contentBase: path.resolve(__dirname,'../examples/'),
      noInfo: true
    },
};
