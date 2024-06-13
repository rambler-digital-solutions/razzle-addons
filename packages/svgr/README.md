# SVGR Plugin

Transform SVGs into React components

## Install

```
npm install -D @rambler-tech/razzle-svgr
```

or

```
yarn add -D @rambler-tech/razzle-svgr
```

## Usage

Add the plugin to `razzle.config.js`

```js
const SvgrPlugin = require('@rambler-tech/razzle-svgr')

module.exports = {
  plugins: [
    SvgrPlugin()
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```

It's also possible to provide args from svgr plugin

```js
const SvgrPlugin = require('@rambler-tech/razzle-svgr')

module.exports = {
  plugins: [
    SvgrPlugin({
      native: true,
    })
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```

[Full list of options are avaible here](https://react-svgr.com/docs/options/)