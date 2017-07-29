var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: './main.js',

    output: {
        path: '/Users/tudor/IdeaProjects/TudorPop/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
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