module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module"
  },
  env: {
    node: true,
    browser: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier-vue/recommended"
  ],
  parser: "vue-eslint-parser",
  plugins: ["vue", "prettier"],
  rules: {
    "no-unused-vars": ["warn", { varsIgnorePattern: ".*", args: "none" }],
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "error"
  }
};
