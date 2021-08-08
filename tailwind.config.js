module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        'very-dark-blue': '#161722',
        'dark-desaturated-blue': '#25273c',
        'light-grayish-blue': '#cacde8',
        'light-grayish-blue-hover': '#e4e5f1',
        'dark-grayish-blue': '#777a92',
        'very-dark-grayish-blue': '#4d5066',
        'very-light-gray': '#fafafa',
        'very-light-grayish-blue': '#e4e5f1',
        'light-grayish-blue': '#d2d3db',
        'dark-grayish-blue': '#9394a5',
        'very-dark-grayish-blue': '#898cae',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
