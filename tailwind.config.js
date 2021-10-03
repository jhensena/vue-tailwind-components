module.exports = {
  purge: ['./index.html', './src/**/*.{vue|js|ts|jsx|tsc}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
