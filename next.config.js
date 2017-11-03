const webpack = require('webpack');

module.exports = {
  webpack: cfg => {
    cfg.plugins.push(new webpack.EnvironmentPlugin([
      'GRAPHCMS_API'
    ]));
    return cfg;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  }
};
