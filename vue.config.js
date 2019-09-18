const path = require("path");
const fs = require("fs");

const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync("src/styles/globals.scss", "utf-8"),
        includePaths: [path.resolve(__dirname, "src/styles")]
      }
    }
  },
  chainWebpack: config => {
    [
      new GoogleFontsPlugin({
        fonts: [{ family: "Manjari" }]
      })
    ];
  }
};
