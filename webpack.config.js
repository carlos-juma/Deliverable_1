const path = require("path");

module.exports = {
    entry: path.join(__dirname, 'frontend', 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'frontend', 'public'),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/, // JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/, // CSS files
                use: [
                    'style-loader', // Injects styles into the DOM
                    'css-loader',   // Translates CSS into CommonJS modules
                    'postcss-loader' // Processes CSS with PostCSS (used for Tailwind)
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Support JS and JSX files
    }
};
