# Environment Plugin

Pass environment variables to app with [dotenv](https://github.com/motdotla/dotenv) and custom variables

## Install

```
npm install -D @rambler-tech/razzle-environment
```

or

```
yarn add -D @rambler-tech/razzle-environment
```

## Usage

Add the plugin to `razzle.config.js`

```js
const EnvironmentPlugin = require('@rambler-tech/razzle-environment')

const VERSION = '...'

module.exports = {
  plugins: [
    EnvironmentPlugin({
      VERSION
    })
  ],
  modifyWebpackConfig({webpackConfig}) {
    // ...
    return webpackConfig
  }
}
```
