const { defineConfig } = require("@vue/cli-service");

module.exports = {
  ...defineConfig({
    transpileDependencies: true,
  }),
  publicPath: process.env.NODE_ENV === "production" ? "/app" : "",
  pages: {
    index: {
      title: "Todo Application",
      entry: "/src/main.js",
    },
    landing: {
      title: "Landing Page",
      entry: "/src/landing.js",
    },
  },
};
