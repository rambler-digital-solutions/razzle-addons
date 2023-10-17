/* eslint-disable sonarjs/no-duplicate-string */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder')

module.exports = () => ({
  modifyWebpackConfig({env: {target, dev: isDev}, webpackConfig}) {
    const isServer = target === 'node'

    const localIdentName = isDev ? '[path][local]' : '[contenthash:base64:8]'

    let loaders
    let vendorCSSLoaders

    if (isServer) {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            esModule: true,
            modules: {
              localIdentName,
              exportOnlyLocals: true
            }
          }
        },
        'postcss-loader'
      ]

      vendorCSSLoaders = ['css-loader']
    } else if (isDev) {
      loaders = [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {localIdentName}
          }
        },
        'postcss-loader'
      ]

      vendorCSSLoaders = ['style-loader', 'css-loader', 'postcss-loader']
    } else {
      loaders = [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {localIdentName}
          }
        },
        'postcss-loader'
      ]

      vendorCSSLoaders = [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: {
              // NOTE: игнорируем загрузку base64 изображений в стилях
              filter: (url) => !/^data:image/.test(url)
            }
          }
        },
        'postcss-loader'
      ]
    }

    const cssLoader = webpackConfig.module.rules.find(
      makeLoaderFinder('css-loader')
    )

    cssLoader.test = /\.css$/
    cssLoader.exclude = [/node_modules/]
    cssLoader.use = loaders

    webpackConfig.module.rules.push({
      test: /\.css$/,
      include: [/node_modules/],
      use: vendorCSSLoaders
    })

    if (!isServer) {
      webpackConfig.plugins.push(new CssMinimizerPlugin())
    }

    return webpackConfig
  }
})
