/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm:'600px',
      md:'800px',
      lg:'1000px',
      xl:'1200px',
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',

      gray: {
        900: '#121214',
        800: '#29292e',
        700: '#323238',
        400: '#7C7C8A',
        300: '#a8a8b3',
        200: '#C4C34CC',
        100: '#E1E1E6',
      },

      cyan: {
        900: '#33BBCF',
        700: '#5CE1E6',
        600: '#7DE7EB',
        500: '#81D8F7',
        400: '#81D8F7',
        300: '#9BE1F8',
        200: '#BEF3F5',
        100: '#DEF9FA',
      },
      blue: {
        800: '#1e40af',
        700: '#1d4ed8',
      },

      purple: {
        800: '#6b21a8',
      },
      pink: {
        700: '#be123c'
      },
      Fuchsia: {
        800: '#86198f'
      }


    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [],
}