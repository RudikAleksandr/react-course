module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:jest-react/recommended',
  ],
  plugins: ['react', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
  },
  rules: {
  },
  overrides: [
    {
      files: ['src/redux/*'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: ['*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
