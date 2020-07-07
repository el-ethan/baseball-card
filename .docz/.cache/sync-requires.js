const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/README.md"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ethan/localdev/baseball-card/.docz/src/pages/404.js")))
}

