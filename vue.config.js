const host="http://127.0.0.1:8080"

module.exports = {
  lintOnSave: false,
  devServer: {
    port:8081,
    disableHostCheck: true,
    proxy: {
      // 保存用户信息
      '^/wx|^/file|^/~|^/public|^/dr|^/newstatic': {
        target: host,
        ws: true,
        changeOrigin: true,
      },
      '/wx/menu/list': {
        target: host,
        ws: true,
        changeOrigin: true,
      }
    }
  }
}
