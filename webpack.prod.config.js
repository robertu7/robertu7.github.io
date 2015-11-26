const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: [ './src/entry' ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=react']
            },
            { test: /\.css$/,  loader: "style-loader!css-loader!postcss-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee'] 
    },
    plugins: [ new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }) ],
    postcss: function (){
        return [
            require('postcss-nested'),
            require('postcss-short'),
            require('postcss-cssnext')({
                autoprefixer: true
            }),
            require('css-mqpacker')
        ]
    }
};