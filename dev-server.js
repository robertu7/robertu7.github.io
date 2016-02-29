'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');

// Switch to Dev Mode
let config = require('./webpack.config');
config.entry.app.unshift('webpack-hot-middleware/client');
config.output.publicPath = '/build/'
config.plugins.pop() // Don't Compress
config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NoErrorsPlugin()) // HMR

// Start Dev Server
const app = express();
const compiler = webpack(config);

app
.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
})) 
.use(require('webpack-hot-middleware')(compiler));

app
.use('/src/images', express.static('src/images'))
.get('*', (req, res) => {
    console.log(req.path)
    res.sendFile(path.join(__dirname, 'index.html'));
})
.listen(3000, 'localhost', err => {
    if (err) console.log(err);
    console.log('Listening at http://localhost:3000');
});