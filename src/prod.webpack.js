var Webpack = require( 'webpack' );
var Fs = require( 'fs' );
var Path = require( 'path' );
var externals = require( 'webpack-node-externals' );

module.exports = {
    context: __dirname,
    devtool: "null",
    resolve: {
        extensions: [ "", ".webpack.js", ".ts", ".tsx", ".js" ]
    },
    entry: {
        index: "./dist.ts"
    },
    output: {
        path: 'dist/lib',
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
    plugins: [
        new Webpack.optimize.DedupePlugin(),
        new Webpack.optimize.OccurenceOrderPlugin(),
        new Webpack.optimize.UglifyJsPlugin({
            debug: false,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            },
            mangle: false
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify( 'production' )
            }
        })
    ],
    externals: [ externals() ],
    node:{
        __filename: true,
        __dirname: true
    }
};