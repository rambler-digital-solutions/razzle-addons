module.exports = (entrypoints) => ({
  modifyWebpackConfig({env: {target, dev: isDev}, webpackConfig}) {
    const isServer = target === 'node'

    if (!isServer) {
      const clientKeys = Object.keys(entrypoints)

      if (isDev) {
        const rurl = webpackConfig.entry.client[0]

        webpackConfig.entry = () => {
          const entryObject = {}

          clientKeys.forEach((key) => {
            entryObject[key] = [rurl, entrypoints[key]]
          })

          return entryObject
        }

        webpackConfig.output.filename = 'static/js/[name].js'
      } else {
        webpackConfig.entry = {...entrypoints}
      }
    }

    return webpackConfig
  }
})
