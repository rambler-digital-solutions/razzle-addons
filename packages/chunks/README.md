# Chunks Plugin

Support for split chunks

## Install

```
npm install -D @rambler-tech/razzle-chunks
```

or

```
yarn add -D @rambler-tech/razzle-chunks
```

## Usage

Add the plugin to `razzle.config.js`

```js
const path = require('path')
const ChunksPlugin = require('@rambler-tech/razzle-chunks')

module.exports = {
  plugins: [
    ChunksPlugin({
      vendors: /[\\/]node_modules[\\/]*[\\/]/
    })
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
