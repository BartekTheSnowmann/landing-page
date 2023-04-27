/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:'#222222',
        secondary:'#F2F2F2',
        tertiary: '#DBA2BF',
        quaternary: '#bf307a'
      }
    },
  },
  plugins: [],
}