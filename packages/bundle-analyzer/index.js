const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const DEFAULT_OPTIONS = {
  analyzerMode: 'server',
  analyzerHost: 'localhost',
  analyzerPort: 3003,
  openAnalyzer: false,
  defaultSizes: 'gzip'
}

module.exports = (options = {}) => ({
  modifyWebpackConfig({env: {target}, webpackConfig}) {
    if (process.env.BUNDLE_ANALYZER === 'true' && target === 'web') {
      webpackConfig.optimization.concatenateModules = false

      webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({...DEFAULT_OPTIONS, ...options})
      )
    }

    return webpackConfig
  }
})
