const ESLintPlugin = require('eslint-webpack-plugin')
const formatter = require('react-dev-utils/eslintFormatter')

module.exports = (options = {}) => ({
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.plugins = [
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        ...options,
        formatter
      }),
      ...webpackConfig.plugins
    ]

    return webpackConfig
  }
})
