module.exports = (groups) => ({
  modifyWebpackConfig({env: {target}, webpackConfig}) {
    const isBrowser = target === 'web'

    if (isBrowser) {
      const entries = Object.keys(webpackConfig.entry)

      webpackConfig.optimization = {
        splitChunks: {
          cacheGroups: {}
        }
      }

      for (const entry of entries) {
        for (const group in groups) {
          webpackConfig.optimization.splitChunks.cacheGroups[
            `${entry}.${group}`
          ] = {
            test: groups[group],
            name: `${entry}.${group}`,
            chunks: (chunk) => chunk.name === entry,
            enforce: true,
            priority: 1
          }
        }
      }
    }

    return webpackConfig
  }
})
