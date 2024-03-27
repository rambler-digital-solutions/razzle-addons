const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = (options = {}) => ({
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.plugins = [
      new ForkTsCheckerWebpackPlugin(options),
      ...webpackConfig.plugins
    ]

    return webpackConfig
  }
})
