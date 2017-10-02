const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

//scss from https://github.com/webpack-contrib/sass-loader
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development",
    allChunks: true
});

module.exports = {
    entry: './src/index.js',
    // devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ],
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Rainbow 🌈 Coins'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};