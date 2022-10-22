const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
    ]
});