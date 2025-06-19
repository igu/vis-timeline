module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },

  parserOptions: {
    sourceType: "module",
  },

  extends: "eslint:recommended",

  rules: {
    complexity: [2, 55],
    "max-statements": [2, 115],
    "no-unreachable": 1,
    "no-useless-escape": 0,
    "no-console": 0,
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "guard-for-in": 1,
  },

  overrides: [
    {
      files: ["libs/vis-timeline/**"],
      rules: {
        "require-jsdoc": "off",
        "valid-jsdoc": "off",
        "no-unused-vars": "off",
        "no-prototype-builtins": "off",
      },
    },
  ],
};
