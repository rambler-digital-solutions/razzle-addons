require('dotenv').config()

const webpack = require('webpack')
const DotenvPlugin = require('dotenv-webpack')

module.exports = (variables) => ({
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.EnvironmentPlugin(variables),
      new DotenvPlugin({
        systemvars: true
      })
    ]

    return webpackConfig
  }
})
