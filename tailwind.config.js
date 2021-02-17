module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'media',
  theme: {
    colors: {
      primaryLight: 'rgb(18, 18, 18)',
      primaryDark: 'rgb(200, 200, 200)',
      secondaryLight: 'rgb(135, 135, 135)',
      secondaryDark: 'rgb(130, 130, 130)',
      backgroundLight: 'rgb(250, 250, 250)',
      backgroundDark: 'rgb(18, 18, 18)'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing: { '200vh': '200vh' },
      backgroundImage: {
        'device-light': "url('/device/light.svg')",
        'device-dark': "url('/device/dark.svg')"
      }
    }
  },
  variants: {
    extend: {
      backgroundImage: ['dark']
    }
  },
  plugins: []
}
