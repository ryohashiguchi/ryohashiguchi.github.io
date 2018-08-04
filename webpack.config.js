const path = require('path');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    entry: {
        js: './src/js/index.js',
        //css: './src/css/main.scss'
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
    //devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    //{loader: 'file-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
            },
        ]
    }
};