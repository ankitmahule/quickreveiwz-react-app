/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: { min: "320px", max: "639px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
