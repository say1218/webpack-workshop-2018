//used destructing to get mode out of env object (6)
//enhanced object literals ES6 feature where {mode} is same as {mode : mode}

const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = ({mode}) => {
    console.log(mode);
    return{
        mode ,
        output: {
            filename: "bundle.js"
        },
        plugins:[ new HTMLWebpackPlugin(), new webpack.ProgressPlugin()]
    };
}