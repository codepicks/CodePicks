module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["react", "react-native", "@typescript-eslint"],
  globals: {
    __DEV__: true,
    FormData: true
  },
  env: {
    jest: true,
    "react-native/react-native": true
  },
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".tsx", ".ts"] }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["** /*.test.tsx", "**/*.story.tsx"]
      }
    ],
    "import/no-unresolved": [2, { ignore: ["./assets"] }],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/camelcase": [
      "error",
      { properties: "never", ignoreDestructuring: true }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-native/no-unused-styles": 2
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"]
      }
    }
  }
};
