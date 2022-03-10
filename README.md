<p align="center"><img src="https://www.11ty.dev/img/logo-github.png" alt="eleventy Logo"></p>

# eleventy-server-browsersync 🕚⚡️🎈🐀

A server plugin to use [Browsersync](https://browsersync.io/) with Eleventy 2.0+.

## ➡ [Documentation: Swap back to Browsersync](https://www.11ty.dev/docs/watch-serve/#swap-back-to-browsersync)

- Please star [Eleventy on GitHub](https://github.com/11ty/eleventy/)!
- Follow us on Twitter [@eleven_ty](https://twitter.com/eleven_ty)
- Support [11ty on Open Collective](https://opencollective.com/11ty)
- [11ty on npm](https://www.npmjs.com/org/11ty)
- [11ty on GitHub](https://github.com/11ty)

[![npm Version](https://img.shields.io/npm/v/@11ty/eleventy-server-browsersync.svg?style=for-the-badge)](https://www.npmjs.com/package/@11ty/eleventy-server-browsersync)

## Installation

```
npm install @11ty/eleventy-server-browsersync
```

```js
module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",

    // Default options shown:
    port: 8080,
    ignore: ["node_modules"],
    watch: false,
    open: false,
    notify: false,
    ui: false,
    ghostMode: false,
    index: "index.html",
  })
};
```

View the [full list of Browsersync options](https://browsersync.io/docs/options).

