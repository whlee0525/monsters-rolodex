// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-fragments': ['off'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-max-props-per-line': [
      'warn',
      {
        maximum: 2,
        when: 'multiline',
      },
    ],
    'react/no-children-prop': ['off'],
    'react/prop-types': ['off'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: false,
        tabWidth: 2,
        semi: true,
        jsxBracketSameLine: false,
        endOfLine: 'auto',
        printWidth: 120,
      },
    ],

    'react/jsx-no-target-blank': [
      'off',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
      },
    ],
    'react/no-unescaped-entities': ['off'],

    // 정의되지 않는 변수는 허용하지 않는다.
    // https://eslint.org/docs/rules/no-undef
    'no-undef': 'error',

    // 이미 정의 된 변수는 같은 Scope에서 다시 정의되어 사용할 수 없다.
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'warn',

    // 사용되지 않는 변수는 제거되어야 한다.
    // https://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'warn',

    // React를 사용하는 파일은 .jsx, .tsx와 같은 파일 확장자를 사용해야 한다.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
  },
};
