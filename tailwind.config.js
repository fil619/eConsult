module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
