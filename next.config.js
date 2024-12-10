const webpack = require("webpack");

module.exports = {
  reactStrictMode: true, // React Strict Mode etkinleştirilir
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    return config;
  },
};
