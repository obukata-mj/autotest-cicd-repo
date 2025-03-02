module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // 外部ライブラリなどは「js/lib」ディレクトリ下などに配置される事を想定。これを除外。
  ignorePatterns: [
    '**/lib/*.js',
    '**/modules/*.js'
  ],
}
