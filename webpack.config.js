const path = require('path');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const ENTRY_PATH = path.resolve(SRC_PATH, 'entry');

module.exports = {
    entry: {
        app: [path.resolve(ENTRY_PATH, 'app')],
        vendor: [
            'classlist',
            'classnames',
            'jump.js',
            'lodash.debounce',
            'react',
            'react-addons-css-transition-group',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: SRC_PATH,
                // exclude: /(node_modules|bower_components)/,
                loaders: ['babel']
            },
            { test: /\.json$/, loader: "json" },
            { test: /\.css$/, loaders: ['style', 'css', 'postcss'] },
            {
                test: /\.svg$/,
                loader: 'svg-sprite',
                query: {
                    prefixize: false
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.coffee'],
        alias: {
            'components': path.resolve(SRC_PATH, 'components'),
            'routes': path.resolve(SRC_PATH, 'routes'),
            'images': path.resolve(SRC_PATH, 'images')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: process.env.NODE_ENV === 'development' || false,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ],
    postcss: function (webpack){
        return [
            require('postcss-import')({
                path: ['src/styles'],
                addDependencyTo: webpack
            }),
            require('postcss-nested'),
            require('postcss-short'),
            require('postcss-assets')({ loadPaths: ['src/images/assets'] }),
            require('postcss-cssnext')({
                autoprefixer: true
            }),
            require('css-mqpacker'),
            // require('cssnano'),
        ]
    }
};