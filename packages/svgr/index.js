module.exports = (options = {}) => ({
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.module.rules[1].exclude.push(/\.svg$/)

    webpackConfig.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {...options}
        }
      ]
    })

    return webpackConfig
  }
})
