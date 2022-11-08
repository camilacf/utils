const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "spms",
    projectName: "utils",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    target: ["web", "es5"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
