const CompressionPlugin = require('compression-webpack-plugin')

module.exports = () => ({
  modifyWebpackConfig({env: {target, dev: isDev}, webpackConfig}) {
    const isServer = target === 'node'

    if (!isServer && !isDev) {
      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new CompressionPlugin({
          filename: '[path][name][ext].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|svg)$/,
          compressionOptions: {level: 11}
        }),
        new CompressionPlugin({
          filename: '[path][name][ext].gz',
          algorithm: 'gzip',
          test: /\.(js|css|svg)$/
        })
      ]
    }

    return webpackConfig
  }
})
