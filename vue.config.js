const path = require("path");
const fs = require("fs");

const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/sms-reminders/" : "/",
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync("src/styles/globals.scss", "utf-8"),
        includePaths: [path.resolve(__dirname, "src/styles")]
      }
    }
  },
  chainWebpack: () => {
    [
      new GoogleFontsPlugin({
        fonts: [{ family: "Manjari" }]
      })
    ];
  }
};
