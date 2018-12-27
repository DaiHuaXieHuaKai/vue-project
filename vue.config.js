const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path')

module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath: 'index.html',
    filenameHashing: true,
    productionSourceMap: true,
    chainWebpack: config => {
        config.plugin("skeleton")
            .use(SkeletonWebpackPlugin, [{
                webpackConfig: {
                    entry: {
                        app: path.join(__dirname, './src/skeleton.js')
                    }
                },
                minimize: true
            }])
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.com',
                changeOrigin: true,
                ws:true
            }
        }
    }
}