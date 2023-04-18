/* eslint-disable import/no-extraneous-dependencies */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        white: {
          DEFAULT: "#ffffff",
          smoke: "#f1f4f9"
        },
        body: "#515561",
        headline: {
          DEFAULT: "#1A1A1A"
        }
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: ["Inter", "inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
