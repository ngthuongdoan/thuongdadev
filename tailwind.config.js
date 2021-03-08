module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cloud: '#E1DAD2',
        sand: '#D8A28C',
        sunbrust: '#D37556',
        teal: '#194A50',
        storm: '#0C2431',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
