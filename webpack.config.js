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
         loaders:  [
             {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };