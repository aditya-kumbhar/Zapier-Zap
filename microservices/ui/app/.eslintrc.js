module.exports = {
  parser: "babel-eslint",
  parserOptions: { ecmaFeatures: { jsx: true, esversion: 6 } },
  env: { browser: true, node: true },
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "linebreak-style": 0,
    "no-unused-vars": 0,
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "no-console": 0
  }
};
