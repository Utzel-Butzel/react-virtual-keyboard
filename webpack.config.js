var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './demo/src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        /*, new ExtractTextPlugin('style.css', {
            allChunks: true
        }) */
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0&presets[]=stage-1']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
        }]
    }
};
