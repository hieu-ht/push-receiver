module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  rules: {
    curly: "error",
    eqeqeq: ["error", "always"],
  },
  overrides: [
    {
      files: ["**/*.test"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "no-undef": "off",
        "import/first": "off",
      },
    },
  ],
};
