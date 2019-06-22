const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 打包提取css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 混淆解压代码
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//提取公共模块,其的依赖
const webpack = require('webpack');
const path = require('path')
module.exports = {
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    entry: { //main是默认入口,也可以是多入口
        main: './src/main.js',

    },
    //出口
    output: {
        // filename:'./build.js?v=1.1.1', //指定js文件
        filename: 'js/[name].[chunkhash:8].js', //指定js文件名 
        path: path.join(__dirname, 'dist'),     //最好是绝对路径（网站根目录）  --打包文件夹名

        publicPath: '/', // 企业中也可以是www.***.com/ 所有资源请求以/(网站根目录)开头
    },
    module: {
        //一样的功能rules:   webpack2.x之后新加的
        rules: [       //require('./a.css||./a.js')
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff|woff2)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/[name].[ext]'
                        },
                    },
                ],
            }, {//处理ES6的js
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: /node_modules/
            },

        ]
    },

    plugins: [

        // 打包提取css          打包名字[] 唯一标识
        new ExtractTextPlugin("css/[name].[hash:8].css"),
        //插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            favicon: './favicon.ico'
        }),
        new VueLoaderPlugin()
        //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
    ],
    // 提取公共组件及第三方包
    optimization: {
        //包清单
        runtimeChunk: {
            name: "manifest"
        },
        //拆分公共包
        splitChunks: {
            cacheGroups: {
                //项目公共组件
                common: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                //第三方组件
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    }


}
