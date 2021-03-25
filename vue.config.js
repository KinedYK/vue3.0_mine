const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

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
        changeOrigin: true,
      },
      '^/foo': {
        target: '<other_url>',
      },
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-adaptive')({
            // 设计稿屏幕宽度 750/10 = 75
            remUnit: 75,
          }),
        ],
      },
    },
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },

  chainWebpack: (config) => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => addStyleResource(config.module.rule('less').oneOf(type)));
  },

  productionSourceMap: true,
};

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/global.less')],
    });
}
