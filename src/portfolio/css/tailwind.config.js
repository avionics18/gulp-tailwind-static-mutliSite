/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/portfolio/*.html", "src/portfolio/js/index.js"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      'sans': ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
