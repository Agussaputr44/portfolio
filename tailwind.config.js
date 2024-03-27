/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins:["poppins"]
      },
      colors:{
        secondary: '#3D0C14',
        primary: '#E8E8E8',
        third: '#6C1A28'

      }
    },
  },
  plugins: [],
}