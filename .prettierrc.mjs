/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 160,
  arrowParens: "always",
  trailingComma: "es5",
};
