# CSS Plugin

Enhanced inject CSS into the razzle bundle

## Install

```
npm install -D @rambler-tech/razzle-css
```

or

```
yarn add -D @rambler-tech/razzle-css
```

## Usage

Add the plugin to `razzle.config.js`

```js
const CssPlugin = require('@rambler-tech/razzle-css')

module.exports = {
  plugins: [
    CssPlugin()
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
