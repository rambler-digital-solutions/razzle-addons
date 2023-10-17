# Multi Entry Plugin 

Support multiple entries instead of one client

## Install

```
npm install -D @rambler-tech/razzle-multi-entry
```

or

```
yarn add -D @rambler-tech/razzle-multi-entry
```

## Usage

Add the plugin to `razzle.config.js`

```js
const path = require('path')
const MultiEntryPlugin = require('@rambler-tech/razzle-multi-entry')

module.exports = {
  plugins: [
    MultiEntryPlugin({
      mobile: path.resolve(__dirname, 'src/mobile/client'),
      desktop: path.resolve(__dirname, 'src/desktop/client')
    })
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
