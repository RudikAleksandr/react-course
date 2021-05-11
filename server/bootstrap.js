require('ignore-styles');

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'dynamic-import-node',
    'babel-plugin-styled-components',
    '@loadable/babel-plugin',
  ]
});

require('./index');
