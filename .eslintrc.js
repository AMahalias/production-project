module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
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
                "**/src/**/*.test.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
              "i18next/no-literal-string": "off",
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
        "i18next"
    ],
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "no-unused-vars": "warn",
      "i18next/no-literal-string": ['error', {
        markupOnly: true,
        ignoreAttribute: ['data-testid']
      }],
      "max-len": ['error', { ignoreComments: true, code: 100 }]
    },
  globals: {
    __IS_DEV__: true,
  }
};
