const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    entry: './scripts/main.js',
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new WriteFilePlugin()
    ],
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};