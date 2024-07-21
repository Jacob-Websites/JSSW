// .eslintrc.js
module.exports = {
    overrides: [
      {
        files: ["**/*.js"],
        parserOptions: {
          ecmaVersion: 2020,
          sourceType: "module",
        },
        rules: {
          "no-unused-vars": "warn",
          "no-console": "off",
          "semi": ["error", "always"],
        },
      },
    ],
  };
  