const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./example/src/index.js",
    output: {
        path: path.resolve(__dirname, "example/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'example'),
        compress: true,
        port: 2345
    }
};