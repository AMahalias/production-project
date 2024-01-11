module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/src/**/*.{test,stories}.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
              "i18next/no-literal-string": "off",
              "max-len": "off"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-unused-vars": "warn",
      "react/display-name": "warn",
      "i18next/no-literal-string": ['error', {
        markupOnly: true,
        ignoreAttribute: ['*', 'data-testid'],
      }],
      "max-len": ['error', { ignoreComments: true, code: 120 }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-params-reassign": "off",
      '@typescript-eslint/no-var-requires': 0,
    },
  globals: {
    __IS_DEV__: true,
  }
};
