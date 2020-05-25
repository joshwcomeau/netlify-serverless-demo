const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Functions demo`,
    author: `@joshwcomeau`,
  },
  plugins: [],

  // In development, we want to proxy all function requests to 'netlify dev'.
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      createProxyMiddleware({
        target: "http://localhost:34567",
        pathRewrite: {
          "/.netlify/functions/": "/",
        },
      })
    )
  },
}
