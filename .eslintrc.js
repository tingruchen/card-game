module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  plugins: ["vue", "prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-model-argument": "off",
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 13,
  },
};
