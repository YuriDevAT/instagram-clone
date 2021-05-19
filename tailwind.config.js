module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  future: {
    removeDeprecatedGapUtilities: true
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary')
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#005c98'
      },
      black: {
        light: '#262626',
        faded: '#00000059'
      },
      gray: {
        base: '#616161',
        background: '#fafafa',
        primary: '#dbdbdb'
      },
      red: {
        primary: '#ed4956'
      }

    },
    extend: {},
  },
  variants: {
    display: ['group-hover'],
    extend: {},
  },
  plugins: [],
}
