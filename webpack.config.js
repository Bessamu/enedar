const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: 'enedar[name].css',
});
module.exports = {
    entry: {
        '.min': './webpack/enedar.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'enedar[name].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader',
                    options: 'minimize'
                }, {
                    loader: 'sass-loader'
                }],
                // use style-loader in development
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        extractSass
    ]
};