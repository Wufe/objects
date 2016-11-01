var Fs = require( 'fs' );
var Path = require( 'path' );
var externals = require( 'webpack-node-externals' );

module.exports = {
    context: __dirname,
    devtool: "source-map",
    resolve: {
        extensions: [ "", ".webpack.js", ".ts", ".tsx", ".js" ]
    },
    entry: {
        index: "./index.ts"
    },
    output: {
        path: 'build/lib',
        filename: "index.js",
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: [ externals() ],
    node:{
        __filename: true,
        __dirname: true
    }
};