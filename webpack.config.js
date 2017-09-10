var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/App.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },

    devServer: {
        port: 8080
    },

    resolve: {
        extensions: [".jsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

module.exports = config;