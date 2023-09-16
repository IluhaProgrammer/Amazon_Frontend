/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black: '#2E3239',
  block: twColors.black,
  white: twColors.white,
  secondary: '#161D25',
  primary: '#FF9902',
  'bg-color': 'F2F2F5',
  aqua: '#268697',
  gray: '#E6E6E6',
  red: twColors.red,
  gray: '#E6E6E6'
}

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      fontSize: {
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5x1': '1.5rem',
        '2x1': '1.725rem',
        '3x1': '2.155rem',
        '4x1': '2.58rem',
        '5x1': '3.45rem',
        '6x1': '4.3rem',
        '7x1': '5.17rem',
        '8x1': '6.9rem',
        '9x1': '9.2rem'
      },
      keyframes: {
        'scaleIn': {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
      }
    },
      animation: {
        'scaleIn': 'scaleIn .35s ease-in-out'
      }
    },
    colors,
  },
  plugins: [],
}

