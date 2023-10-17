# Compression Plugin

Get compressed versions of assets with gzip and brotli algorithms

## Install

```
npm install -D @rambler-tech/razzle-compression
```

or

```
yarn add -D @rambler-tech/razzle-compression
```

## Usage

Add the plugin to `razzle.config.js`

```js
const CompressionPlugin = require('@rambler-tech/razzle-compression')

module.exports = {
  plugins: [
    CompressionPlugin(),
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
