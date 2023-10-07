const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/wms': {
        target: 'https://geoserver.meioambiente.mg.gov.br',
        changeOrigin: true,
        pathRewrite: {
          '^/wms': ''
        }
      }
    }
  }
});
