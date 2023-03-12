/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["src/santhalimusic/*.html", "src/santhalimusic/js/index.js"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'serif': ['Jost', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: colors.lime,
      },
    },
  },
  plugins: [],
}
