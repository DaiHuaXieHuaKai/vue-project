// const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
// const path = require('path')

// module.exports = {
//     chainWebpack: config => {
//         config.plugin("skeleton")
//             .use(SkeletonWebpackPlugin, [{
//                 webpackConfig: {
//                     entry: {
//                         app: path.join(__dirname, './src/skeleton.js')
//                     }
//                 },
//                 minimize: true
//             }])
//     },
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: "",
//                 changeOrigin: true
//             }
//         }
//     }
// }