# Bundle Analyzer Plugin

Analyze bundle content with [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Install

```
npm install -D @rambler-tech/razzle-bundle-analyzer
```

or

```
yarn add -D @rambler-tech/razzle-bundle-analyzer
```

## Usage

Add the plugin to `razzle.config.js`

```js
const BundleAnalyzerPlugin = require('@rambler-tech/razzle-bundle-analyzer')

module.exports = {
  plugins: [
    BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 3003
    })
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```

Than add npm script to run analyzer to your `package.json`

```json
{
  ...
  "scripts": {
    ...
    "analyzer": "BUNDLE_ANALYZER=true razzle build --noninteractive"
  }
}
```
