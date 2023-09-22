/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-color": "#212121",
        "secondary-color": "#FE6D3F",
        "tertiary-color": "#EBEBD3"
      },
      textColor:{
        "primary-color": "#212121"
      },
      keyframes: {
        "rightToLeft": {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(100%)'}
        },
        "leftToRight": {
          '0%': {transform: 'translateX(-50%)'},
          '100%': {transform: 'translateX(0%)'}
        }

      }
    },
    animation: {
      "rightToLeft": 'rightToLeft 8s linear infinite',
      "leftToRight": 'leftToRight 8s linear infinite'
    }
  },
  plugins: [],
}

