// @ts-check

import react from "eslint-plugin-react";
import globals from "globals";
import { config, configs } from "typescript-eslint";

export default config({
  ...configs.recommended,
  files: ["src/**/*.{ts,tsx,mts}"],
  plugins: {
    react,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    // ... any rules you want
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
});
