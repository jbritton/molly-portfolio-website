const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



//-------------------------------------------------------------------------------------------------
//  Plugins
//-------------------------------------------------------------------------------------------------

// defines global window variables - production env disables react debugging
const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
});

// extracts css into a separate file
const extractTextPlugin = new ExtractTextPlugin('style.css');

// injects script tags into the html template file
const htmlPlugin = new HtmlWebpackPlugin({
    template: 'src/index.html'
});

const copyPlugin = new CopyWebpackPlugin([ {
    from: 'src/assets', to: 'assets' }
]);


//-------------------------------------------------------------------------------------------------
//  Webpack Config
//-------------------------------------------------------------------------------------------------

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    loader: 'css-loader!postcss-loader'
                    // loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&camelCase!postcss-loader'
                })
            }
        ]
    },
    plugins: [
        definePlugin,
        extractTextPlugin,
        htmlPlugin,
        copyPlugin
    ]
};
