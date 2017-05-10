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
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                //loader: 'url?limit=10000&mimetype=application/font-woff'
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'application/font-woff' }
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                //loader: 'url?limit=10000&mimetype=application/font-woff'
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'application/font-woff' }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                //loader: 'url?limit=10000&mimetype=application/octet-stream'
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'application/octet-stream' }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                //loader: 'url?limit=10000&mimetype=image/svg+xml'
                loader: 'url-loader',
                options: { limit: 10000, mimetype: 'image/svg+xml' }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
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
