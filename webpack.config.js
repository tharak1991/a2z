 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: [
         './src/app.js'
     ],
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /(\.jsx|\.js)$/,
             exclude: /node_modules/,
             loader:"babel-loader",
              query: {
                  presets: ['es2015', 'react']
              }
         }]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };