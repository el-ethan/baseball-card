const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---readme-md": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/README.md"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/.docz/src/pages/404.js")))
}

