/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
     "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        shine: {
          '0%': {
            left: '-30rem'
          },
          '20%': {
            left: '20rem'
          },
          '40%': {
            left: '20rem'
          },
          '100%': {
            left: '80rem'
          }
        }
      }
    },
    animation: {
      shine: 'shine 1s 4s ease-in-out'
    }
  },
  plugins: [],
}
