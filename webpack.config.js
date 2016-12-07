const Fs = require( 'fs' );
const Path = require( 'path' );
const Webpack = require( 'webpack' );
const externals = require( 'webpack-node-externals' );

const prod = process.env.NODE_ENV == 'production';

module.exports = {
    context: __dirname,
    devtool: prod ? "null" : "source-map",
    resolve: {
        extensions: [ "", ".webpack.js", ".ts", ".tsx", ".js" ]
    },
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: prod ? "dist/lib" : "build/lib",
        filename: "objects.js",
        libraryTarget: 'umd'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader!ts-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: prod ? [
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
    ] : [],
    externals: [ externals() ],
    node:{
        __filename: true,
        __dirname: true
    }
};