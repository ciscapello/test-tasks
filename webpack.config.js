const path = require('path');
const miniCss = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
           test:/\.(s*)css$/,
           use: [
              miniCss.loader,
              'css-loader',
              'sass-loader',
           ]
        }]
     },
    plugins: [
        new miniCss({
           filename: 'style.css',
        }),
    ],
    watch: true,
    mode: 'development'
}