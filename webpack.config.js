const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        app: ['./src/entry'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['babel-loader?presets[]=es2015,presets[]=react'] },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.css$/,  loader: "style-loader!css-loader!postcss-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee'] 
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ],
    postcss: function (webpack){
        return [
            require('postcss-import')({ addDependencyTo: webpack }),
            require('postcss-nested'),
            require('postcss-short'),
            require('postcss-cssnext')({
                autoprefixer: true
            }),
            require('css-mqpacker')
        ]
    }
};