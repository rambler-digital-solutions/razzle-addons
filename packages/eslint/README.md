# ESLint Plugin

Find problems in your code on build step

## Install

```
npm install -D @rambler-tech/razzle-eslint eslint
```

or

```
yarn add -D @rambler-tech/razzle-eslint eslint
```

## Usage

Add the plugin to `razzle.config.js`

```js
const ESLintPlugin = require('@rambler-tech/razzle-eslint')

module.exports = {
  plugins: [
    ESLintPlugin(),
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
