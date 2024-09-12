const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  config = singleSpaAngularWebpack(config, options);
  return config;
};
