const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    {
      name: 'storypug',
      options: {
        loaderOptions: {
          basedir: path.resolve(__dirname, '../src/components'),
          pretty: true,
          root: path.resolve(__dirname, '../src/components'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
    });

    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src/components'),
    ];

    return config;
  },
};
