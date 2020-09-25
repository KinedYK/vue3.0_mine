module.exports = {
  publicPath: './',
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,
  devServer: {
    compress: true,
    proxy: {
      '^/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: true,

}