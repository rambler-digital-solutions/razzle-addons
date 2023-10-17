module.exports = () => ({
  modifyWebpackConfig({webpackConfig}) {
    webpackConfig.module.rules[1].exclude.push(/\.svg$/)

    webpackConfig.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return webpackConfig
  }
})
