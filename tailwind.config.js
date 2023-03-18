/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        white: {
          DEFAULT: "#ffffff",
          smoke: "#F7F7F7"
        },
        body: "#616571",
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
