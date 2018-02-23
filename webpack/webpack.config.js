const path = require('path');
const webpack = require('webpack');
const WriteFilePlugin = require("write-file-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  context: path.resolve(__dirname,'..','src'),
  entry: [
    './browser.js'
  ],
  output: {
    path: path.resolve(__dirname,'..','src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
     new WriteFilePlugin({
    // Write only files that have ".css" extension.
    test: /\.css$/,
    useHashIndex: true
   }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        __DEV__: true
    })
  ],
  module: {
     rules: [
            { test: /\.js?$/, 
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [ 'react-hmre' ]
                  } 
              }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            sourceMap: true,
                            localIdentName:'[path][name][local][hash:base64:16]'
                        },
                    },
                ],
            
           },
           {
                test: /\.(jpg|png|gif|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ]
          },
         {
                test: /\.(svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
          },
         {
                test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    //options: {
                    //name: '[name].[ext]',
                    //outputPath: 'fonts/',    // where the fonts will go
                    //publicPath: '../'       // override the default path
                    //}
                }]
       },
     ]
  },
    watch:true,
    resolve: { extensions: [".js", ".jsx"] },
    devtool: 'cheap-eval-source-map',
    devServer:{
      hot: true,
      contentBase: path.resolve(__dirname,'..','src')
    },


};
