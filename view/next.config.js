const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withOffline = require("next-offline");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withOffline(
  withCSS(
    withSass({
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: "url-loader"
          }
        }),
          config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

        return config;
      }
    })
  )
);
