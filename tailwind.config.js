/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#61CE70',
        },
        screens:{
          '2xl': '1537px',
        }
      },
    },
    plugins: [],
  }