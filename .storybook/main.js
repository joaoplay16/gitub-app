const common = require('../webpack/common')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    config.resolve = common.resolve

    return config;
  },
};
