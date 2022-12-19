module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    colors: {
      primaryLight: 'rgb(18, 18, 18)',
      primaryDark: 'rgb(200, 200, 200)',
      secondaryLight: 'rgb(135, 135, 135)',
      secondaryDark: 'rgb(130, 130, 130)',
      backgroundLight: 'rgb(250, 250, 250)',
      backgroundDark: 'rgb(18, 18, 18)'
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
