const { defineConfig } = require("@vue/cli-service");
// const path = require("path");

module.exports = defineConfig({
  devServer: {
    port: process.env.VUE_APP_PORT,
    // proxy: {
    // },
  },
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     console.log('production', config)
  //   } else {
  //     console.log('not production', config)
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      // .set("static", path.resolve(__dirname, "./public/static"))
      // .set("node_modules", path.resolve(__dirname, "./node_modules"))
      .set("assets", "@/assets")
      .set("components", "@/components")
      .set("utility", "@/utility")
      .set("tailwind", "@/tailwind")
      .set("pages", "@/pages")
      .set("stores", "@/stores");
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  transpileDependencies: true,
});
