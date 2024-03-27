# TypeScript Plugin

Find problems in your code on build step

## Install

```
npm install -D @rambler-tech/razzle-typescript
```

or

```
yarn add -D @rambler-tech/razzle-typescript
```

## Usage

Add the plugin to `razzle.config.js`

```js
const TypeScriptPlugin = require('@rambler-tech/razzle-typescript')

module.exports = {
  plugins: [
    TypeScriptPlugin(),
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
