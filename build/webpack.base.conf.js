// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var  webpackConf = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件 
    entry: {  index: [   path.resolve(__dirname, '../src/main.js')  ] },
    // 输出配置 
    output: {  // 输出路径是 myProject/output/static  
        path: path.resolve(__dirname, '../output'), 
        publicPath:'/',  filename: '[name].[hash].js' 
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.common.js',
        '@': resolve('src'),
      }
    },
    devtool: "source-map", 
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src'), resolve('test')]
        },
        {
            test: /\.css$/,   
            loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        { 
          test: /\.scss$/,
          loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
        }
      ]
  }, 
    plugins:[  
        new HtmlWebpackPlugin({   
              filename: 'index.html',  
              template: path.resolve(__dirname, '../index.html'),  
              inject: true  
          }),
        new ExtractTextPlugin("static/css/smui.css"),
        new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" })
    ]
 }
 module.exports  = webpackConf;