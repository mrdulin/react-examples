const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        /**
         * throw new Error("DllPlugin: supply an Array as entry");
         * dll的vendor必须是数组的形式
         */
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'react-tap-event-plugin',
            'react-addons-css-transition-group',
            'material-ui',
            'whatwg-fetch'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist', "dll"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, "dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "src")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        root: path.resolve(__dirname, "src"),
        modulesDirectories: ["node_modules"]
    }
};