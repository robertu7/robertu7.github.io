const path = require('path');
const webpack = require('webpack');


var isProduction = process.env.NODE_ENV;


console.log(isProduction)

module.exports = {
    entry: isProduction ? [ './src/entry' ]
    : [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/entry'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react']
            },
            { test: /\.css$/,  loader: "style-loader!css-loader!postcss-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee'] 
    },
    plugins: isProduction ? [ new webpack.optimize.UglifyJsPlugin() ]
    : [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.HotModuleReplacementPlugin()
    ],
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