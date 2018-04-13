const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        'homework9-task1': ['./src/homework9-task1/homework9-task1.js'],
        'homework9-task2': ['./src/homework9-task2/homework9-task2.js'],
        'homework9-task3': ['./src/homework9-task3/homework9-task3.js'],
        'homework9-task4': ['./src/homework9-task4/homework9-task4.js'],
        'homework9-task5': ['./src/homework9-task5/homework9-task5.js'],
        'homework9-task6': ['./src/homework9-task6/homework9-task6.js'],
        'homework9-task7': ['./src/homework9-task7/homework9-task7.js'],
        'homework9-task8': ['./src/homework9-task8/homework9-task8.js'],
        'homework9-task9': ['./src/homework9-task9/homework9-task9.js'],
        'homework9-task10': ['./src/homework9-task10/homework9-task10.js'],
        'homework9-task11': ['./src/homework9-task11/homework9-task11.js'],
        // about: ['babel-polyfill', './src/about/about.js']
     };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `styles/[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: 'js/[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['env']
                            }
                        }
                    ]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?publicPath=../&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?publicPath=../&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;