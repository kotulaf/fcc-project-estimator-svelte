const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPLugin = require("html-webpack-plugin");
const fs = require("fs");
const webpack = require("webpack");

module.exports = {
    // this tells webpack that we are in development mode and tells it to write the code in webpack file in a different way
    mode: "development",
    // our index file
    entry: "./src/index.js",
    // where we put the production code
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            // allows us to use modern javascript
            {
                test: /\.js?$/,
                exclude: /node_modules/, // we have to exclude node_modules, there is a crazy amount of files that would just be useless to check
                use: {
                    loader: "babel-loader",
                },
            },
            // allows use of svelte
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                },
            },
            // allows use of css
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)/,
                use: {
                    loader: "file-loader",

                }
            }
        ]
    },
    plugins: [
        // this enables us to put all of our css into an unique file
        new MiniCssExtractPlugin(),
        // allows to create an index.html in our build folder
        new HtmlWebpackPLugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ]
}