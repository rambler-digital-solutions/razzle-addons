const ESLintPlugin = require('eslint-webpack-plugin')
const formatter = require('react-dev-utils/eslintFormatter')

module.exports = (options = {}) => ({
  modifyWebpackConfig({env: {dev: isDev}, webpackConfig}) {
    if (isDev) {
      webpackConfig.plugins = [
        new ESLintPlugin({
          cache: false,
          extensions: ['js', 'jsx', 'ts', 'tsx'],
          ...options,
          formatter
        }),
        ...webpackConfig.plugins
      ]
    }

    return webpackConfig
  }
})
