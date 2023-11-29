const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devServer = (isDev) => !isDev ? {} : {
    devServer: {
        open: true,
        hot: true,
        port: 8080,
    }
};

module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    target: 'web',
    entry: {
        index: path.resolve(__dirname, './srcs/index.js'),
        blog_article: path.resolve(__dirname, './srcs/blog-article.js'),
    },
    resolve: {
        extensions: ['.*', '.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'static'),
        chunkFilename: '[id].[chunkhash].js'
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './srcs/index.html'
        // }),
        new HtmlWebpackPlugin({
            filename: 'templates/blog-article.html',
            template: './srcs/templates/blog-article.html'
        }),
        new MiniCssExtractPlugin({
            filename: './styles/main.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                // { from: 'srcs/templates', to: 'templates/' },
                { from: 'srcs/pages', to: 'pages/' },
                { from: 'srcs/assets', to: 'assets/' },
                // You can add more patterns if needed
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
                type: 'asset/inline'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
        ]
    },
    ...devServer(develop)
});