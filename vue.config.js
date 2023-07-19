const CompressionWebpackPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = function getBaseVueConfig(name) {
  return {
    pages: {
      index: {
        entry: "./main.js",
        template: "./index.html",
        title: "xxx",
        filename: "index.html",
        chunks: ["chunk-vendors", "chunk-common", "index"],
      },
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: path.resolve(__dirname, "dist"),
    assetsDir: "static",
    //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    devServer: {
      contentBase: `./static`,
      index: `${name}.html`,
    },
    // chainWebpack: (config) => {},
    configureWebpack: (config) => {
      const myConfig = {};
      Object.assign(config, {
        // 开发生产共同配置
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
      });
      if (process.env.NODE_ENV === "production") {
        myConfig.plugins = [];
        // 为生产环境修改配置...
        myConfig.plugins.push(
          new CompressionWebpackPlugin({
            test: /\.(js|css|json|txt|html|ico|svg|less)(\?.*)?$/i,
            threshold: 8192,
            minRatio: 0.8,
          })
        );
        myConfig.plugins.push(
          new CopyPlugin([
            {
              from: "./static",
              to: "./static",
            },
          ])
        );
      }
      return myConfig;
    },
  };
};
