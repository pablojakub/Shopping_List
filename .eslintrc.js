module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  rules: {
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-implicit-any-catch": "warn",
  }
}
