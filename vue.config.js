const path = require('path')// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
      .set('common', resolve('src/common'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 代理的目标  访问的接口 QQ音乐
        // bypass代表访问源地址是提前设置的数据
        // bypass: function (req, res, proxyOptions) {
        //   req.headers.referer = 'https://u.y.qq.com'
        //   req.headers.host = 'u.y.qq.com'
        // },
        changeOrigin: true, // 是否将主机头的原点 更改为ur地址
        pathRewrite: { // 访问跨域地址时，把/api隐藏
          '/api': '/mock'

        }
      }
    }
  }
}
